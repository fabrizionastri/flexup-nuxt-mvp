<template>
  <div style="display: inline-block; margin-right: 30px">
    Select account:
    <select v-model="sharedState.selectedAccountId">
      <option
        v-for="accountId in accountIds"
        :key="accountId.id"
        :value="accountId.id"
        :name="accountId.name"
      >
        {{ accountId.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
  const accountIds = [
    { name: 'Account 0', id: 'account0' },
    { name: 'Account 1', id: 'account1' },
    { name: 'Account 2', id: 'account2' },
    { name: 'Account 3', id: 'account3' },
    { name: 'Account 4', id: 'account4' },
    { name: 'Account 5', id: 'account5' }
  ]
</script>
