<template>
  <div>
    <!-- computedLabelWidth: {{ computedLabelWidth }} computedValueWidth: {{ computedValueWidth }} -->
    <div class="grid grid-cols-12 items-center">
      <label for="select" :class="computedLabelWidth">{{ label }}</label>
      <select v-model="selectedId" id="select" :class="computedValueWidth">
        <option v-for="item in list" :key="item.id" :value="item.id">
          {{ item.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
  const selectedId = ref('')
  const { list, label, valueWidth, labelWidth } = defineProps({
    list: Array,
    label: String,
    labelWidth: {
      type: Number
      // default: '4' // default to 9 columns
    },
    valueWidth: {
      type: Number
      // default: '3' // default to 3 columns
    }
  })
  const computedLabelWidth = computed(() => `col-span-${labelWidth}`)
  const computedValueWidth = computed(() => `col-span-${valueWidth}`)

  console.log('computedLabelWidth for:', label, computedLabelWidth.value)
  console.log('computedValueWidth for:', label, computedValueWidth.value)

  // whenever the selectedId changes, log it to the console
  watch(selectedId, (newValue, oldValue) => {
    console.log('selectedId changed from', oldValue, 'to', newValue)
  })
</script>
