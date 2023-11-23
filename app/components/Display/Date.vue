<template>
  <div>
    {{ formatDate(value, 'fr-FR') }}
  </div>
</template>

<script setup>
  import { formatDate } from '@/../lib/utils/formatDate'
  defineProps({ value: [String, Date] })
</script>
