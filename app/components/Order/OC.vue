<!-- ChatGPT -->
<template>
  <div>
    <div v-if="mode === 'view'">
      <div v-for="(value, key) in order" :key="key">
        <label :for="key">{{ key }}:</label>
        <input :id="key" :class="`border=${isEditable(key)}`" :value="value" />
      </div>
      <button @click="switchToEditMode">Edit</button>
    </div>

    <div v-else>
      <div v-for="key in editableFields" :key="key">
        <label :for="key">{{ key }}:</label>
        <input v-model="editableData[key]" :id="key" />
      </div>
      <button @click="saveChanges">Save</button>
      <button @click="discardChanges">Discard</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    order: {
      type: Object,
      required: true
    }
    // editableFields: {
    //   type: Array,
    //   default: () => []
    // }
  })

  const mode = ref('view')
  const editableData = ref({})

  const isEditable = (key) => props.editableFields.includes(key)

  const getEditableValue = (key) => (isEditable(key) ? editableData.value[key] : props.data[key])

  function switchToEditMode() {
    editableData.value = props.editableFields.reduce((acc, field) => {
      acc[field] = props.data[field]
      return acc
    }, {})
    mode.value = 'edit'
  }

  function saveChanges() {
    mode.value = 'view'
    // Emit an event with the updated data
    emit('update', editableData.value)
  }

  function discardChanges() {
    mode.value = 'view'
  }
</script>
