<template lang="pug">
h2 Active Account
AccountMiniCard(:account="activeAccount")
div.m-5(v-for="(value, key) in activeAccount" :key="key")
  strong {{ key }}: &nbsp;
  span {{ value }}

h2 Other accounts
AccountSelector

</template>

<script setup>
  const activeAccount = useState('activeAccount', () => ({
    id: 1,
    name: 'FlexUp',
    type: 'Activity',
    icon: '/images/profiles/flexup.svg'
  }))
</script>
