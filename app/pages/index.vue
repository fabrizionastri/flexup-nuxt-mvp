<template>
  <div>
    <h1>Hello World !</h1>
    <h2 class="text-red">This is nice</h2>
    <h3 class="rounded text-lime-800 mr-3">This also</h3>
    <p class="text-xl">{{ message }}</p>
  </div>
</template>

<script setup>
  const message = ref('This is my personal message')
</script>
