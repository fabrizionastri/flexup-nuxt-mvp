<template>
  <h2>Team List</h2>
  <ul class="divide-y divide-gray-200">
    <TeamItem v-for="team in teams" :key="team.id" :team="team" />
  </ul>
</template>

<script setup>
  defineProps({
    teams: Array
  })
</script>
