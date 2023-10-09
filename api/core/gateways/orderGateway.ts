import { ItemAdapter, OrderAdapter } from 'adapters/database/adapterInterfaces'
import { Order, OrderData } from 'entities/order'
import { createItemGateway } from 'gateways/itemGateway'
import { round6 } from 'utils/round'

import { OrderGateway } from './gatewayInterfaces'

export const createOrderGateway = (
  orderAdapter: OrderAdapter,
  itemAdapter: ItemAdapter
): OrderGateway => {
  const itemGateway = createItemGateway(itemAdapter)
  const addItemsAndCalculate = async (order: OrderData): Promise<Order> => {
    const items = (await itemGateway.getByOrderId(order.id)) ?? []

    const amountExclTax = round6(items.reduce((sum, item) => sum + item.amountExclTax, 0))
    const taxAmount = round6(
      items.reduce((sum, item) => sum + item.amountExclTax * item.taxRate, 0)
    )
    const amountInclTax = round6(amountExclTax + taxAmount)
    const averageTaxRate = amountExclTax ? round6(taxAmount / amountExclTax) : 0

    return {
      name: order.name ? order.name : '',
      ...order,
      items: items,
      amountExclTax,
      amountInclTax,
      taxAmount,
      averageTaxRate,
      principal: amountInclTax
    }
  }
  const getAllData = async (): Promise<OrderData[]> => await orderAdapter.getAll()
  const getByIdData = async (orderId: string): Promise<OrderData | undefined> =>
    await orderAdapter.getById(orderId)
  const getAll = async (): Promise<Order[]> => {
    const orderDatas = await orderAdapter.getAll()
    const orders = await Promise.all(orderDatas.map(addItemsAndCalculate))
    return orders
  }

  const getById = async (orderId: string): Promise<Order | undefined> => {
    const order = await orderAdapter.getById(orderId)
    if (order) {
      return addItemsAndCalculate(order)
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
