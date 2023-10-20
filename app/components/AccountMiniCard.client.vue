<template>
  <div class="flex py-2">
    <img id="img1" class="ml-2 h-10 w-10 rounded-full" :src="account.avatar" alt="" />
    <div class="ml-3">
      <p class="text font-medium text-gray-900">{{ account.name }}</p>
      <p class="text-sm text-gray-500">{{ account.ownerType }}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps(['account'])
</script>
