<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <!-- <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">    -->
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div id="LeftSection" class="flex">
          <NavBarLogo />
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          <NavBarLinks />
        </div>
        <div id="RightSection" class="flex items-center">
          <!-- <Dropdown /> -->
          <!-- <AddNew /> -->

          <div class="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
            <!-- <NotificationBell /> -->
            <AccountMenu />
          </div>
        </div>
      </div>
    </div>

    <NavBarMobileMenu />
  </Disclosure>
</template>

<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  const links = [
    { name: 'Home', route: '/' },
    { name: 'Account', route: '/account' },
    { name: 'Login', route: '/login' },
    { name: 'Orders', route: '/orders' },
    { name: 'Playground', route: '/playground' },
    { name: 'YesNo', route: '/yesno' }
  ]
  const currentPage = ref('Home')
</script>
