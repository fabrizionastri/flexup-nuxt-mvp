<template>
  <div>
    <h1>Order Details</h1>
    Order Nr: {{ orderId }} <br />
    Order: {{ order }}
  </div>

  <!-- From ChatGPT -->
  <OrderDetailChatGPT />
</template>

<script setup>
  import { useOrderStore } from '@/stores/useOrderStore'
  const route = useRoute()
  const orderStore = useOrderStore()

  const orderId = route.params.orderId
  // console.log('► app/pages/order/[orderId].vue → - orderId:', orderId)

  const order = orderStore.getOrder(orderId)
  // console.log('► app/pages/order/[orderId].vue → - order CHOLCOLAT:', order)
</script>
