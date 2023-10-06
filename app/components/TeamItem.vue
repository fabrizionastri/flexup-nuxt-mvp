<template>
  <h3>Team</h3>
  <li class="flex py-4">
    <img class="rounded-pnpmfull h-10 w-10" :src="team.logo" alt="" />
    <div class="ml-3">
      <p class="text-sm font-medium text-gray-900">{{ team.name }}</p>
      <p class="text-sm text-gray-500">{{ team.city }}</p>
    </div>
  </li>
</template>

<script setup>
  defineProps({
    team: Object
  })
</script>
