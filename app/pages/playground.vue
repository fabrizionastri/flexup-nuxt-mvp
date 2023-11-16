<template>
  <div>
    <h1 class="my-5">Playground</h1>
    <p class="mb-10">This is a temp page to try out new things</p>

    <!-- <NavBarAccount /> -->
  </div>
</template>

<script setup>
  const date = new Date('2012-05-24')
  console.log('►  → - navigator.language:', navigator.language)
  const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date)
  console.log('►  → - formattedDate:', formattedDate)
</script>
