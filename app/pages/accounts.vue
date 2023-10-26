<template lang="pug">
h2 Active Account
AccountMiniCard(:account="activeAccount")
div.m-1(v-for="(value, key) in activeAccount" :key="key")
  strong {{ key }}: &nbsp;
  span {{ value }}


</template>

<script setup>
  const activeAccount = useActiveAccount()
  console.log('😊 app/pages/accounts.vue - activeAccount:', JSON.stringify(activeAccount.value))
</script>
