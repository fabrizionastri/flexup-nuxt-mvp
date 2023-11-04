<template>
  <div>
    <h1>Login</h1>

    <div class="flex justify-center">
      <form @submit.prevent="handleLogin" class="m-5 w-1/2">
        <!-- identifier and password inputs, with labels and nice formatting -->
        <label for="identifier">Identifier:</label>
        <input
          class="border-1 my-2 rounded-lg border-gray-300 p-2"
          type="text"
          v-model="identifier"
        />
        <br />
        <label for="password">Password:</label>
        <input
          class="border-1 my-2 rounded-lg border-gray-300 p-2"
          type="text"
          v-model="password"
        />
        <br />
        <!-- put the button and the error message on the same line -->
        <div class="flex">
          <button
            class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            type="submit"
          >
            Login
          </button>
          <p class="ml-5 mt-3 text-red-500">{{ errorMsg }}</p>
        </div>
        <p class="mt-10 text-xs">User : {{ user }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
  const identifier = ref('totoUsername')
  const password = ref('plop')
  const user = useActiveUser()
  // const user = ref('')
  const errorMsg = ref('')

  const handleLogin = async () => {
    const response = await login(identifier.value, password.value)
    if (response.error) {
      // Login failed
      errorMsg.value = response.error
      user.value = ''
    } else {
      // Login succeeded
      user.value = response
      errorMsg.value = ''
    }
    //     try {
    //       const response = await login(identifier.value, password.value)
    //
    //       // Login succeeded
    //       user.value = response
    //       errorMsg.value = ''
    //     } catch (error) {
    // Login failed
    // user.value = ''
    // if (error.response && error.response.data) {
    // API error with response data
    // console.log('app/pages/login.vue - error:', error)
    // console.log(error)
    // errorMsg.value = error.response.data
    // } else {
    //   // Network error or generic error
    //   errorMsg.value = 'An error occurred'
    // }
    // }
  }
</script>
