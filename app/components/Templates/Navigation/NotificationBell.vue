<template>
  <div>
    <button
      id="Bell"
      type="button"
      class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <span class="absolute -inset-1.5" />
      <span class="sr-only">View notifications</span>
      <BellIcon class="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
</template>

<script setup>
  import { BellIcon } from '@heroicons/vue/24/outline'
</script>
