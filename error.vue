<script setup>
  const error = useError()
  const handleError = () => {
    clearError({
      redirect: '/'
    })
  }
</script>

<template>
  <div class="flex h-screen justify-center items-center flex-col leading-loose gap-7">
    <h1 class="text-8xl font-bold">Fabri Error</h1>
    <h2 class="px-20 p-5 font-bold text-6xl">
      {{ error?.statusCode }}
    </h2>
    <p>{{ error?.message }}</p>
    <v-btn color="primary" @click="handleError"> Go back </v-btn>
  </div>
</template>
