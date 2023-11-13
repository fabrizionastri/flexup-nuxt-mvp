<template lang="pug">
h2 Active Account
AccountListCard(:account="account")
div.m-1(v-for="(value, key) in account" :key="key")
  strong {{ key }}: &nbsp;
  span {{ value }}


</template>

<script setup>
  const accountStore = useAccountStore()
  console.log(
    '😊 app/pages/activeAccounts.vue - activeAccount:',
    JSON.stringify(accountStore.account.value)
  )
</script>
