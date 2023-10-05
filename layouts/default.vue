<template>
  <!-- <div class="fabGreen">
    ./layouts/default.vue -->
  <v-main>
    <NavBar />
    <SideBar />
    <Breadcrumbs />
    <!-- <div class="fabRed">
            ./layouts/default.vue/v-main -->
    <div style="margin: 20px">
      <slot />
    </div>
    <!-- </div> -->
  </v-main>
  <!-- </div> -->
</template>

<script setup>
// if sidebar emits
</script>
