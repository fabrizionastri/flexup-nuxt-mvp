<template>
  <div v-if="!userStore.isLoggedIn">
    <NuxtLink
      href="/login"
      :class="['text-l  group flex items-center rounded px-4 py-2 text-gray-900 hover:bg-gray-100']"
    >
      <ArrowRightOnRectangleIcon
        class="mr-3 h-8 text-gray-900 group-hover:text-gray-500"
        aria-hidden="true"
      />
      Login
    </NuxtLink>
  </div>
</template>

<script setup>
  import { ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'
  import { useUserStore } from '../../stores/useUserStore'
  const userStore = useUserStore()
</script>
