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

  const selectAccount = (account) => {
    accountStore.setCurrentAccount(account)
  }
</script>
