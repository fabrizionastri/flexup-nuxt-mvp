<template>
  <div class="text-center">
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> FlexUp </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(account, index) in accounts" :key="index">
          <v-list-item-title>{{ account.accountName }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script setup>
  const accountId = ref(1)
  const accounts = [
    { accountId: 1, accountName: 'FlexUp' },
    { accountId: 2, accountName: "Pizza D'Oro" },
    { accountId: 3, accountName: 'Plop' },
    { accountId: 4, accountName: 'Plip' }
  ]
</script>
