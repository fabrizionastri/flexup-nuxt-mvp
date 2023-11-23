<template>
  <div>
    <h1 class="my-5">Playground</h1>
    <p>This is a temp page to try out new things</p>
    <hr class="mb-10 mt-5" />

    <!-- <DisplayString value="hello" />
    <DisplayValue value="hello" />

    <DisplayDate :value="today" />
    <DisplayValue :value="today" />

    <DisplayDate value="2013-12-01" />
    <DisplayValue :value="new Date('2009-12-15')" />

    <DisplayObject :value="{ a: 1, b: 2 }" />
    <DisplayValue :value="{ a: 1, b: 2 }" /> -->

    <!-- <DisplayObject :value="order" /> -->
    <!-- <DisplayValue :value="order" /> -->

    <!-- <DisplayArray :value="order.items" /> -->
    <DisplayValue :value="order" />
  </div>
</template>

<script setup>
  import { useOrderStore } from '@/stores/useOrderStore'
  const orderStore = useOrderStore()
  // const order = orderStore.getOrder('orderWithRebate')
  const order = orderStore.getOrder('commercialOrder')

  const today = new Date()
  console.log('►  → - today:', today)
</script>
