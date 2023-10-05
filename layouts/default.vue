<template>
  <!-- <div class="fabGreen">
    ./layouts/default.vue -->
  <v-app>
    <!-- <div class="fabYellow">
        ./layouts/default.vue/v-app -->
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
  </v-app>
  <!-- </div> -->
</template>

<script setup>
  // if sidebar emits
</script>
