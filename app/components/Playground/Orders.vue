<template>
  <div>
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
  const order = orderStore.orders[0]

  const today = new Date()
  console.log('►  → - today:', today)
</script>
