<script setup>
  const error = useError()
  const handleError = () => {
    clearError({
      redirect: '/'
    })
  }
</script>

<template>
  <div class="flex h-screen flex-col items-center justify-center gap-7 leading-loose">
    <h1 class="text-8xl font-bold">Fabri Error</h1>
    <h2 class="p-5 px-20 text-6xl font-bold">
      {{ error?.statusCode }}
    </h2>
    <p>{{ error?.message }}</p>
    <button @click="handleError">Go back</button>
  </div>
</template>
