<template>
  <div>
    <component :is="componentToRender" :value="value" />
  </div>
</template>

<script setup>
  import DisplayArray from './Array.vue'
  import DisplayObject from './Object.vue'
  import DisplayDate from './Date.vue'
  import DisplayNumber from './Number.vue'
  import DisplayString from './String.vue'
  import { isDate, isArray, isObject } from '@/../lib/utils'

  const props = defineProps({
    value: [Array, Date, Number, Object, String]
  })

  const componentToRender = computed(() => {
    if (isArray(props.value)) {
      console.log('isArray = true for:', props.value)
      return DisplayArray
    } else if (isDate(props.value)) {
      console.log('isDate = true for:', props.value)
      return DisplayDate
    } else if (isObject(props.value)) {
      console.log('isObject = true for:', props.value)
      return DisplayObject
    } else if (typeof props.value === 'number') {
      console.log('typeof number = true for:', props.value)
      return DisplayNumber
    } else {
      console.log('else = true for:', props.value)
      return DisplayString
    }
  })
</script>
