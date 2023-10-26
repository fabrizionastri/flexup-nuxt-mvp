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
        <button type="submit" class="w-24 rounded bg-blue-200 p-2 text-center">Submit</button>
        <p class="mt-10 text-xs">User : {{ user }}</p>
        <p class="mt-5 text-xs">Error : {{ errorMsg }}</p>
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

  const handleLogin = () => {
    console.log(
      'app/pages/playground copy.vue - identifier & password:',
      identifier.value,
      password.value
    )
    login(identifier.value, password.value)
      .then((res) => {
        console.log(res)
        user.value = res
      })
      .catch((err) => {
        console.log(err)
      })
  }
</script>
