<template lang="pug">
div
  h1 Playground
  p This is a temp page to try out new things

  p DB : {{ db }}
  form
    //- identifier and password inputs, with labels and nice formatting
    label(for="identifier") Identifier:
    input(type="text" v-model="identifier")
    br
    label(for="password") Password:
    input(type="password" v-model="password")
    br
    button(type="submit" @click="handleLogin") Submit
    //- p User : {{ user }}

</template>

<script setup>
  import { login } from '~/api/usecases'

  const db = `getDb()`
  const identifier = ref('')
  const password = ref('')
  // const user = useActiveUser()
  const user = ref('')

  const handleLogin = () =>
    login(identifier.value, password.value)
      .then((res) => {
        console.log(res)
        user.value = res
      })
      .catch((err) => {
        console.log(err)
      })
</script>
