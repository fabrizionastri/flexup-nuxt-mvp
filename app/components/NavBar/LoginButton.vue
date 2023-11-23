<template>
  <NuxtLink
    href="/login"
    class="text-l group flex w-[150px] items-center rounded bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-500"
  >
    <ArrowRightOnRectangleIcon class="mr-3 h-8 text-white" aria-hidden="true" />
    Sign in
  </NuxtLink>
</template>

<script setup>
  import { ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'
</script>
