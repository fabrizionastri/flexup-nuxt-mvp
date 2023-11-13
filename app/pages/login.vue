<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-20 w-auto" src="images\logos\flexup-icon.svg" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="login">
        <div>
          <div class="flex items-center justify-between">
            <label for="identifier" class="block text-sm font-medium leading-6 text-gray-900"
              >Identifier</label
            >
            <div class="text-sm">
              <a href="#" class="font- text-indigo-400 hover:text-indigo-500"
                >Which identifier should I use?
              </a>
            </div>
          </div>
          <div class="mt-2">
            <input
              autocomplete="identifier"
              class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="identifier"
              name="identifier"
              placeholder="username, email or mobile number"
              required=""
              type="identifier"
              v-model="identifier"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              autocomplete="current-password"
              class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="password"
              name="password"
              required=""
              type="password"
              v-model="password"
            />
          </div>
        </div>

        <div class="flex">
          <button
            type="submit"
            class="flex w-1/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
          <p class="ml-5 flex w-1/2 justify-center px-3 py-1.5 text-red-500">{{ errorMsg }}</p>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not registered yet?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Create your free account</a
        >
      </p>
    </div>
    <!-- <ClientOnly>
      <p class="mt-3 ml-5 text-red-500">{{ errorMsg }}</p>
      <p class="mt-10 text-xs text-gray-300">User : {{ user }}</p>
      <p class="mt-10 text-xs text-gray-300">User stringified : {{ JSON.stringify(user) }}</p>
    </ClientOnly> -->
  </div>
</template>

<script setup>
  import { useUserStore } from '@/stores/useUserStore'
  import { useAccountStore } from '@/stores/useAccountStore'

  const userStore = useUserStore()
  const accountStore = useAccountStore()

  const identifier = ref('fabrizioUsername')
  const password = ref('plop')
  const errorMsg = ref('')

  const login = async () => {
    try {
      await userStore.loginUser(identifier.value, password.value)
      console.log('User: ', userStore.user)
      await accountStore.fetchAndUpdateAccounts(token)
      console.log('Accounts: ', accountStore.accounts)
      errorMsg.value = ''
    } catch (error) {
      errorMsg.value = error.message
      await userStore.logoutUser()
      await accountStore.clearAccounts()
    }
  }
  watchEffect(
    () => userStore.user,
    () => {
      if (userStore.user) {
        router.push('/')
      }
    }
  )
</script>
