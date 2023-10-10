<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  <nuxt-img :src="image" />
</template>

<script setup>
  const question = ref('')
  const answer = ref('Questions usually contain a question mark. ;-)')
  const image = ref('https://yesno.wtf/assets/yes/10-271c872c91cd72c1e38e72d2f8eda676.gif')

  // watch works directly on a ref
  watch(question, async (newQuestion) => {
    if (newQuestion.indexOf('?') > -1) {
      answer.value = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        const data = await res.json()
        answer.value = data.answer
        image.value = data.image
      } catch (error) {
        answer.value = 'Error! Could not reach the API. ' + error
      }
    }
  })
</script>
