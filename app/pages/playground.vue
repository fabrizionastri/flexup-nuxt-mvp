<template>
  <div>
    <h1 class="my-5">Playground</h1>
    <p>This is a temp page to try out new things</p>
    <hr class="mb-10 mt-5" />
    <DisplayObject :object="order" />
    <!-- <DisplayTable :dataArray="order.items" /> -->
  </div>
</template>

<script setup>
  import { useOrderStore } from '@/stores/useOrderStore'
  const orderStore = useOrderStore()
  // const order = orderStore.getOrder('orderWithRebate')
  const order = orderStore.getOrder('commercialOrder')
</script>
