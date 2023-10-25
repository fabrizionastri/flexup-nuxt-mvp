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
  const accounts = await getAccounts()
  const activeAccount = useActiveAccount()
  const emit = defineEmits(['closeAccountSelector'])
  const selectAccount = (account) => {
    console.log('activeAccountId =', account.name, ', #', account.id)
    activeAccount.value = account
    emit('closeAccountSelector')
  }
</script>

<!-- <ul class="m-2 w-60 divide-y divide-gray-200 rounded border"> -->
<!-- <ul class="divide-y divide-gray-200">
    <li
      v-for="account in accounts"
      :key="account.id"
      @click="selectAccount(account)"
      class="cursor-pointer hover:bg-gray-100"
    >
      <AccountMiniCard :account="account" />
    </li>
  </ul> -->
