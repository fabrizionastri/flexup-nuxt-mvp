<template lang="pug">
div
  h1 Playground
  p This is a temp page to try out new things

  p DB : {{ db }}
</template>

<script setup lang="ts">
  const db = getDb()
</script>
