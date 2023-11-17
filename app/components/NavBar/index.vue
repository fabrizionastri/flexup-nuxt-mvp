<template>
  <div class="mx-auto bg-white px-4 shadow sm:px-6 lg:px-8">
    <div class="flex h-16 justify-between">
      <!-- LEFT SECTION -->
      <div class="flex">
        <NavBarFlexUpLogo />
        <NavBarLinks />
      </div>
      <!-- RIGHT SECTION -->
      <ClientOnly>
        <div class="flex items-center">
          <div class="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
            <AccountMenu v-if="userStore.isLoggedIn" />
            <div v-else>
              <NavBarLoginButton v-if="route.path !== '/login'" />
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/stores/useUserStore'
  const userStore = useUserStore()
  const route = useRoute()
</script>
