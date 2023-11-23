<template>
  <div>
    {{ value }}
  </div>
</template>

<script setup>
  defineProps({
    value: [String, Date, Number, Boolean, Object, Array]
  })
</script>
