<!-- app/components/AccountSelector.client.vue -->
<template>
  <ul class="divide-y divide-gray-200 bg-white">
    <li
      v-for="account in accountStore.activeAccounts"
      :key="account.id"
      @click="selectAccount(account)"
      :class="{
        ' hover:bg-gray-100': true,
        'active-account': account.id === accountStore.currentAccount?.id
      }"
    >
      <AccountListCard :account="account" />
    </li>
  </ul>
</template>

<script setup>
  import { useAccountStore } from '@/stores/useAccountStore'
  const accountStore = useAccountStore()

  // const emit = defineEmits(['closeAccountSelector'])

  const selectAccount = (account) => {
    accountStore.setCurrentAccount(account)
    // emit('closeAccountSelector')
  }
  watchEffect(() => {
    // console.log('Active account changed:', accountStore.currentAccount.value)
  })
</script>

<!-- // console.log(
//   'app/components/AccountSelector.client.vue =',
//   accountStore.currentAccount.value.name,
//   ', #',
//   accountStore.currentAccount.value.id
// )
// console.log(
//   'Selected account:',
//   account.id,
//   'Current Account:',
//   accountStore.currentAccount.value?.id
// ) -->
