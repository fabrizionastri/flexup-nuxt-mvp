<template>
  <div>
    {{ formatCurrency(value, 'EUR', 'fr-FR') }}
  </div>
</template>

<script setup>
  import { formatCurrency } from '@/../lib/utils/formatCurrency'
  defineProps({
    value: Number
  })
</script>
