<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" v-for="column in displayedColumns" :key="column.key">
                    {{ column.label }}
                  </th>

                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span>Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="order in orders" :key="order.id">
                  <td v-for="column in displayedColumns" :key="column.key">
                    {{ order[column.key] }}
                  </td>

                  <td>
                    <NuxtLink to="#" class="flex text-indigo-600 hover:text-indigo-900"
                      ><PencilIcon class="w- h-5"
                    /></NuxtLink>
                  </td>
                </tr>
                <!-- of orders.length = 0, display message "No orders for this account" -->
                <tr v-if="orders.length === 0">
                  <td colspan="6" class="py-4 text-center">No orders for this account</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref, watch } from 'vue'
  import { useOrderStore } from '@/stores/useOrderStore'
  import { useUserStore } from '@/stores/useUserStore'
  import { useAccountStore } from '@/stores/useAccountStore'
  import { PencilIcon } from '@heroicons/vue/20/solid'

  const orderStore = useOrderStore()
  const userStore = useUserStore()
  const accountStore = useAccountStore()
  const orders = ref([])

  const displayedColumns = [
    { key: 'id', label: 'Order ID' },
    { key: 'name', label: 'Name' },
    { key: 'nature', label: 'Nature' },
    { key: 'supplierAccountId', label: 'Supplier' },
    { key: 'clientAccountId', label: 'Client' },
    { key: 'amountInclTax', label: 'Total' }
  ]

  const fetchOrders = async () => {
    const token = userStore.token
    const accountId = accountStore.currentAccount.id
    orders.value = await orderStore.fetchAllOrders(accountId, token)
  }

  onMounted(fetchOrders)

  watch(() => accountStore.currentAccount, fetchOrders, { deep: true })
</script>

<style scoped>
  td {
    @apply whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-gray-900 sm:pl-6;
  }

  th {
    @apply py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6;
  }

  hr {
    @apply my-8;
  }
</style>
