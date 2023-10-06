<template>
  <h1>Teams</h1>
  <TeamList :teams="teams" />
</template>

<script setup>
  const teams = [
    {
      id: 1,
      name: 'Toronto Maple Leafs',
      city: 'Toronto',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/1200px-Toronto_Maple_Leafs_2016_logo.svg.png'
    }
  ]
</script>
