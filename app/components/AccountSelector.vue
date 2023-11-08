<template lang="pug">
ul.divide-y.divide-gray-200
  li(
    v-for="account in accounts",
    :key="account.id",
    @click="selectAccount(account)",
    class="cursor-pointer hover:bg-gray-100"
  )
    AccountMiniCard(:account="account")
</template>

<script setup>
  const accounts = useAllUserAccounts()
  const activeAccount = useActiveAccount()
  const emit = defineEmits(['closeAccountSelector'])
  const selectAccount = (account) => {
    console.log('activeAccountId =', account.name, ', #', account.id)
    activeAccount.value = account
    emit('closeAccountSelector')
  }
</script>
