<template lang="pug">
h1 Active Account
div.m-5(v-for="(value, key) in activeAccount" :key="key")
  strong {{ key }}: &nbsp;
  span {{ value }}


</template>

<script setup>
  const activeAccount = useState('activeAccount', () => ({
    id: 1,
    name: 'FlexUp',
    type: 'Activity',
    icon: '/images/profiles/flexup.svg'
  }))
</script>
