/*
TODO : I have not been able to run this file with ts-node.
*/

import { createItemGateway } from './api/core/gateways/itemGateway'
import { createItemAdapterInMemory } from './api/adapters/database/inMemory/createItemAdapterInMemory'
import db from './mock/index.json' assert { type: 'json' }

const itemAdapter = createItemAdapterInMemory()
const itemGateway = createItemGateway(itemAdapter)

const generateComputedItems = async () => {
  const computedItems = []

  // Loop through each item in db.json and compute it using the gateway
  for (const itemData of db.item) {
    const computedItem = await itemGateway.getById(itemData.id)
    if (computedItem) {
      computedItems.push(computedItem)
    }
  }

  // Format the items in a way that's easy to copy-paste
  const formattedItems = `export const items: ItemComputed[] = [\n${computedItems
    .map(
      (item) =>
        `  {\n    ...itemDatas.find(data => data.id === "${item.id}"),\n    unitPriceInclTax: ${item.unitPriceInclTax},\n    amountExclTax: ${item.amountExclTax},\n    taxAmount: ${item.taxAmount},\n    amountInclTax: ${item.amountInclTax}\n  }`
    )
    .join(',\n')}\n]`

  console.log(formattedItems)
}

generateComputedItems()
