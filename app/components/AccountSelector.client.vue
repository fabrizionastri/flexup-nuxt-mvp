<template>
  <ul class="divide-y divide-gray-200">
    <li
      v-for="account in activeAccounts"
      :key="account.id"
      @click="selectAccount(account)"
      :class="{
        ' hover:bg-gray-100': true,
        'active-account': account.id === currentAccount.id
      }"
    >
      <AccountListCard :account="account" />
    </li>
  </ul>
</template>

<script setup>
  // import { useAccountStore } from 'app/stores/useAccountStore'

  const accountStore = useAccountStore()
  const activeAccounts = accountStore.activeAccounts
  const currentAccount = accountStore.account
  const emit = defineEmits(['closeAccountSelector'])
  const selectAccount = (account) => {
    console.log('app/components/AccountSelector.client.vue =', account.name, ', #', account.id)
    account.value = account
    emit('closeAccountSelector')
  }
  watchEffect(() => {
    console.log('Active account changed:', currentAccount.value)
  })
</script>
