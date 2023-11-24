<template>
  <div class="grid grid-cols-12 items-center gap-4">
    <label for="input" class="col-span-3">entityName</label>
    <input id="input" type="text" placeholder="Product name" v-model="value" class="col-span-9" />
  </div>
</template>

<script setup>
  const value = ref('Supplier One')

  // whenever the selectedId changes, log it to the console
  watch(value, (newValue, oldValue) => {
    console.log('value changed from', oldValue, 'to', newValue)
  })
</script>
