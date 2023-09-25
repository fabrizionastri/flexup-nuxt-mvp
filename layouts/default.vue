<template>
  <!-- <div class="fabGreen">
    ./layouts/default.vue -->
  <VApp>
    <VMain>
      <!-- <div class="fabYellow">
        ./layouts/default.vue/v-app -->
      <NavBar />
      <SideBar />
      <Breadcrumbs />
      <!-- <div class="fabRed">
            ./layouts/default.vue/v-main -->
      <div style="margin: 20px">
        <slot />
      </div>
      <!-- </div> -->
    </VMain>
    <!-- </div> -->
  </VApp>
  <!-- </div> -->
</template>

<script setup>
  // if sidebar emits
</script>
