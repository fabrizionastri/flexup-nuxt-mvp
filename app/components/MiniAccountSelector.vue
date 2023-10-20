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
    { name: 'Account 0', id: 'flexup' },
    { name: 'Account 1', id: 'cosysAccount' },
    { name: 'Account 2', id: 'pizzaDOro' },
    { name: 'Account 3', id: 'fabrizioAccount' },
    { name: 'Account 4', id: 'doMazy' },
    { name: 'Account 5', id: 'poulaillerMobile' }
  ]
</script>
