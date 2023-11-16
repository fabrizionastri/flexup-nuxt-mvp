<template lang="pug">
div
  h1 Accounts
    h2 Current Account
      AccountListCard(:account="currentAccount")
    h2 All Accounts
      AccountListCard(v-for="account in allAccounts" :key="account.id" :account="account")


</template>

<script setup>
  const accountStore = useAccountStore()
  const currentAccount = accountStore.currentAccount
  const allAccounts = accountStore.allAccounts
  console.log(
    '😊 app/pages/activeAccounts.vue - activeAccount:',
    JSON.stringify(accountStore.account.value)
  )
</script>
