<template>
  <div>
    <h1>Playground</h1>
    <p>This is a temp page to try out new things</p>

    <p>DB : {{ db }}</p>
    <form @submit.prevent="handleLogin">
      <!-- identifier and password inputs, with labels and nice formatting -->
      <label for="identifier">Identifier:</label>
      <input type="text" v-model="identifier" />
      <br />
      <label for="password">Password:</label>
      <input type="password" v-model="password" />
      <br />
      <button type="submit">Submit</button>
    </form>

    <br />
    <hr />
    <br />
    <p>User : {{ user }}</p>
    <p>Error : {{ errorMsg }}</p>
  </div>
</template>

<script setup>
  const db = `getDb()`
  const identifier = ref('totoUsername')
  const password = ref('plop')
  // const user = useActiveUser()
  const user = ref('')
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
