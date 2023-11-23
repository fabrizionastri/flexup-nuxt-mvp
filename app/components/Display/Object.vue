<template>
  <div>
    <dl
      v-for="(item, key) in value"
      :key="key"
      class="flex border-b py-1 last:mb-3 last:border-white"
    >
      <dt class="w-1/6 font-semibold">{{ key }}</dt>
      <dd class="w-5/6"><DisplayValue :value="item" /></dd>
    </dl>
  </div>
</template>

<script setup>
  defineProps({
    value: {
      type: Object,
      required: true
    }
  })
</script>
