<!-- ToDo: use  @tailwindcss/container-queries to adjust the ratio based on the size of the container rather than the size of the view port-->
<template>
  <div>
    <dl
      v-for="(item, key) in value"
      :key="key"
      class="flex border-b py-1 last:mb-3 last:border-white"
    >
      <dt class="w-1/6 font-medium">{{ key }}</dt>
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
