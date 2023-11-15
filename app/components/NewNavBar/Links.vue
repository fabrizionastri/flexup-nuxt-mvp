<template>
  <div class="ml-6 space-x-2 md:flex">
    <NuxtLink
      v-for="link in links"
      :key="link.name"
      :to="link.route"
      :class="linkClass(link.route)"
      >{{ link.name }}</NuxtLink
    >
  </div>
</template>

<script setup>
  const route = useRoute()

  const links = [
    { name: 'Home', route: '/' },
    { name: 'Account', route: '/account' },
    { name: 'Login', route: '/login' },
    { name: 'Orders', route: '/orders' },
    { name: 'Playground', route: '/playground' },
    { name: 'YesNo', route: '/yesno' }
  ]

  const linkClass = (name) => {
    let baseClass =
      'inline-flex items-center px-3 pt-1 my-2 hover:rounded text-sm font-medium hover:bg-gray-100 hover:text-gray-700 '
    if (name === route.path) {
      return `${baseClass} border-b-2 border-indigo-200 text-gray-900 hover:border-indigo-500`
    }
    return `${baseClass} border-b-2 border-white text-gray-500 hover:border-indigo-500`
  }
</script>
