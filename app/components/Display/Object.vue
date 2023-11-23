<template>
  <div>
    <dl v-for="(value, key) in object" :key="key" class="mb-2 flex border-b">
      <dt class="w-1/5 font-semibold">{{ key }}</dt>
      <dd class="w-4/5">{{ value }}</dd>
    </dl>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  // Define props
  defineProps({
    object: {
      type: Object,
      required: true
    }
  })
</script>
