<template>
  <div>
    <label>{{ label }}: </label>
    <span
      v-if="isEditable"
      contenteditable="true"
      @input="$emit('update:value', $event.target.innerText)"
      >{{ value }}</span
    >
    <span>{{ value }}</span>
  </div>
</template>

<script setup>
  defineProps({
    label: String,
    value: String,
    isEditable: Boolean
  })
</script>
