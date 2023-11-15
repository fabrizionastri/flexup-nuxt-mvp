<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-left text-sm text-gray-500">
      <thead class="bg-gray-50 text-xs uppercase text-gray-700">
        <tr>
          <th scope="col" class="px-6 py-3">Order ID</th>
          <th scope="col" class="px-6 py-3">Date</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id" class="border-b bg-white">
          <td class="px-6 py-4">{{ order.id }}</td>
          <td class="px-6 py-4">{{ order.date }}</td>
          <td class="px-6 py-4">{{ order.status }}</td>
          <td class="px-6 py-4">{{ order.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useOrderStore } from '@/stores/useOrderStore'
  import { useUserStore } from '@/stores/useUserStore'
  import { useAccountStore } from '@/stores/useAccountStore'
</script>

<style scoped>
  /* Add component-specific styles here */
</style>
