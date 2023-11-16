<!-- app/components/AccountMenu.vue -->
<template>
  <div>
    <NavBarLogin />
    <Menu as="div" v-if="userStore.isLoggedIn" class="relative ml-4 inline-block w-56">
      <div>
        <MenuButton class="w-full rounded-md ring-1 ring-inset ring-white hover:bg-gray-100">
          <AccountTag :account="accountStore.currentAccount" />
          <!-- <ChevronDownIcon class="w-5 h-5 -mr-1 text-gray-400" aria-hidden="true" /> -->
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <!--  -->
        <MenuItems
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="bg-gray-100 p-1.5">
            <div class="text-sm font-bold text-gray-500 underline">Select active account:</div>
            <AccountSelector :accounts="accountStore.activeAccounts" class="my-1 rounded border" />
          </div>
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'group flex items-center px-4 py-2 text-sm'
                ]"
              >
                <PencilSquareIcon
                  class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                Edit
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'group flex items-center px-4 py-2 text-sm'
                ]"
              >
                <DocumentDuplicateIcon
                  class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                Duplicate
              </a>
            </MenuItem>
          </div>
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'group flex items-center px-4 py-2 text-sm'
                ]"
              >
                <ArchiveBoxIcon
                  class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                Archive
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'group flex items-center px-4 py-2 text-sm'
                ]"
              >
                <ArrowRightCircleIcon
                  class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                Move
              </a>
            </MenuItem>
          </div>
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'group flex items-center px-4 py-2 text-sm'
                ]"
              >
                <UserPlusIcon
                  class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                Share
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'group flex items-center px-4 py-2 text-sm'
                ]"
              >
                <HeartIcon
                  class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                Add to favorites
              </a>
            </MenuItem>
          </div>
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'group flex items-center px-4 py-2 text-sm'
                ]"
              >
                <TrashIcon
                  class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                Delete
              </a>
            </MenuItem>
          </div>
          <div class="p-0">
            <div class="bg-gray-100 p-1.5">
              <div class="text-sm font-bold text-gray-500 underline">User:</div>
              <div class=": my-1 rounded border bg-white">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'group flex items-center px-4 py-2 text-sm'
                    ]"
                  >
                    <UserIcon
                      class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    {{ userStore.user.fullName }}
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <div
                    @click="logout"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'group flex items-center px-4 py-2 text-sm'
                    ]"
                  >
                    <ArrowLeftOnRectangleIcon
                      class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    Logout
                  </div>
                </MenuItem>
              </div>
            </div>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import {
    ArchiveBoxIcon,
    ArrowRightCircleIcon,
    DocumentDuplicateIcon,
    HeartIcon,
    PencilSquareIcon,
    TrashIcon,
    UserPlusIcon,
    UserIcon,
    ArrowLeftOnRectangleIcon
  } from '@heroicons/vue/20/solid'
  import { useAccountStore } from '@/stores/useAccountStore'
  import { useUserStore } from '@/stores/useUserStore'

  const accountStore = useAccountStore()
  const userStore = useUserStore()

  const logout = () => {
    navigateTo('/login')
    userStore.logoutUser()
  }
  watch(userStore.user, (newValue, oldValue) => {
    console.log('app/components/NavBar.vue - user changed:', newValue, oldValue)
  })
</script>

<style>
  button {
    @apply text-left;
  }
</style>
