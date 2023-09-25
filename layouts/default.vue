<template>
  <div class="fabGreen">
    ./layouts/default.vue
    <VApp>
      <div class="fabYellow">
        ./layouts/default.vue/v-app
        <NavBar />
        <SideBar />
        <VMain>
          <div class="fabRed">
            ./layouts/default.vue/v-main
            <slot />
          </div>
        </VMain>
      </div>
    </VApp>
  </div>
</template>
