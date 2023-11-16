<template>
  <div>
    <h3>Order: {{ order.name }}</h3>
    <ul>
      <li>Order ID: {{ order.id }}</li>
      <li>Client ID: {{ order.clientAccountId }}</li>
      <li>Supplier ID: {{ order.supplierAccountId }}</li>
      <li>Amount excluding tax: {{ order.amountExclTax }}</li>
      <li>Tax amount: {{ order.taxAmount }}</li>
      <li>Amount including tax: {{ order.amountInclTax }}</li>
      <li>Average tax rate: {{ order.averageTaxRate }}</li>
      <li>Principal: {{ order.principal }}</li>
    </ul>
    <h4 style="text-decoration: underline">Items:</h4>
    <ul>
      <li v-for="item in order.items" :key="item.id">
        <h5>Item: {{ item.name }}</h5>
        <ul>
          <li>Item ID: {{ item.id }}</li>
          <li>Order ID: {{ item.orderId }}</li>
          <li>Quantity: {{ item.quantity }}</li>
          <li>Unit: {{ item.unit }}</li>
          <li>Unit price: {{ item.unitPriceExclTax }}</li>
          <li>Tax rate: {{ item.taxRate * 100 }}%</li>
          <li>Unit price including tax: {{ item.unitPriceInclTax }}</li>
          <li>Amount excluding tax: {{ item.amountExclTax }}</li>
          <li>Tax amount: {{ item.taxAmount }}</li>
          <li>Amount including tax: {{ item.amountInclTax }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    order: {
      type: Object,
      required: true
    }
  })
</script>
