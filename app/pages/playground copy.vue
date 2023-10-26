<template lang="pug">
div
  h1 Playground
  p This is a temp page to try out new things

  p DB : {{ db }}
  form(@submit.prevent="handleLogin")
    //- identifier and password inputs, with labels and nice formatting
    label(for="identifier") Identifier:
    input(type="text" v-model="identifier")
    br
    label(for="password") Password:
    input(type="password" v-model="password")
    br
    button(type="submit") Submit

  br
  hr
  br
  p User : {{ user }}
  p Error : {{ errorMsg }}

</template>

<script setup>
  const db = `getDb()`
  const identifier = ref('')
  const password = ref('')
  // const user = useActiveUser()
  const user = ref('')

  const handleLogin = () => {
    console.log(
      '😊 app/pages/playground copy.vue - identifier & password:',
      identifier.value,
      password.value
    )
    login(identifier.value, password.value)
      .then((res) => {
        console.log('😊 app/pages/playground copy.vue - res:', res)
        user.value = res
      })
      .catch((err) => {
        console.log('😖 app/pages/playground copy.vue - err:', err)
      })
  }
</script>
