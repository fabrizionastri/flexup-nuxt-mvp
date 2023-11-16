<template lang="pug">
div
  h1 Selected Account
      AccountListCard(:account="selectedAccount")
      p Account Details: {{ selectedAccount }}


</template>

<script setup>
  const accountStore = useAccountStore()
  const route = useRoute()
  const selectedAccountId = route.params.accountId
  const selectedAccount = accountStore.getAccount(selectedAccountId)

  console.log('> app/pages/accounts/[accountId].vue - selectedAccountId:', selectedAccountId)
</script>
