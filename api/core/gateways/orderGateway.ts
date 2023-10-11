import { TrancheGateway, createTrancheGateway } from './trancheGateway'
import { computeItem } from '../usecases/computeItem'
import {
  createItemAdapter,
  createOrderAdapter,
  createTrancheAdapter
} from 'adapters/database'
import {
  ItemAdapter,
  OrderAdapter,
  TrancheAdapter
} from 'adapters/database/interfaces'

import { OrderData, Order } from 'entities/order'
import { ItemGateway, createItemGateway } from 'gateways/itemGateway'
import { round6 } from 'utils/round'

export interface OrderGateway {
  getAllData: () => Promise<OrderData[]>
  getByIdData: (orderId: string) => Promise<OrderData | undefined>
  getAll: () => Promise<OrderData[]>
  getById: (orderId: string) => Promise<OrderData | undefined>
}

export const createOrderGateway = (
  orderAdapter: OrderAdapter,
  itemAdapter: ItemAdapter,
  trancheAdapter: TrancheAdapter
): OrderGateway => {
  const computeOrder = createComputeOrderFunc(itemAdapter, trancheAdapter)

  const getAllData = async (): Promise<OrderData[]> =>
    (await orderAdapter.getAll()) ?? []

  const getByIdData = async (orderId: string): Promise<OrderData | undefined> =>
    await orderAdapter.getById(orderId)

  const getAll = async (): Promise<OrderData[]> => {
    const orderDatas = await orderAdapter.getAll()
    const orders = await Promise.all(orderDatas.map(computeOrder))
    return orders
  }

  const getById = async (orderId: string): Promise<OrderData | undefined> => {
    const order = await orderAdapter.getById(orderId)
    if (order) {
      return computeOrder(order)
    }
    return undefined
  }
  return {
    getAllData,
    getByIdData,
    getAll,
    getById
  }
}

export const useOrderGateway = (accountId: string): OrderGateway => {
  const orderAdapter = createOrderAdapter(accountId)
  const itemAdapter = createItemAdapter()
  const trancheAdapter = createTrancheAdapter()
  const orderGateway = createOrderGateway(
    orderAdapter,
    itemAdapter,
    trancheAdapter
  )
  return orderGateway
}

const computeOrderWithItems = async (
  order: OrderData,
  itemGateway: ItemGateway
): Promise<Order> => {
  const itemDatas = await itemGateway.getByOrderId(order.id)
  const items = itemDatas.map(computeItem)

  const amountExclTax = round6(
    items.reduce((sum, item) => sum + item.amountExclTax, 0)
  )
  const taxAmount = round6(
    items.reduce((sum, item) => sum + item.amountExclTax * item.taxRate, 0)
  )
  const amountInclTax = round6(amountExclTax + taxAmount)
  const averageTaxRate = amountExclTax ? round6(taxAmount / amountExclTax) : 0
  if (amountExclTax) order.principal = amountInclTax

  return {
    ...order,
    items,
    amountExclTax,
    amountInclTax,
    taxAmount,
    averageTaxRate
  }
}

const createComputeOrderFunc = (
  itemAdapter: ItemAdapter,
  trancheAdapter: TrancheAdapter
): ((order: OrderData) => Promise<Order>) => {
  return async (order: OrderData): Promise<Order> => {
    const itemGateway: ItemGateway = createItemGateway(itemAdapter)
    const trancheGateway: TrancheGateway = createTrancheGateway(trancheAdapter)
    const orderWithItems: Order = await computeOrderWithItems(
      order,
      itemGateway
    )
    const tranches = await trancheGateway.getByOrder(orderWithItems)
    return {
      ...orderWithItems,
      tranches
    }
  }
}
