<template>
  <ul class="divide-y divide-gray-200">
    <li
      v-for="account in accounts"
      :key="account.id"
      @click="selectAccount(account)"
      :class="{
        ' hover:bg-gray-100': true,
        'active-account': account.id === activeAccount.id
      }"
    >
      <AccountListCard :account="account" />
    </li>
  </ul>
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
  watchEffect(() => {
    console.log('Active account changed:', activeAccount.value)
  })
</script>
