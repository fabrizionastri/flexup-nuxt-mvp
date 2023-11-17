<!-- Antropic Claude -->
<template>
  <div>
    AC
    <!-- <div v-if="mode === 'view'">
      <button @click="setEditMode">Edit</button>
    </div>
    <div v-else>
      <button @click="save">Save</button>
      <button @click="setViewMode">Cancel</button>
    </div>

    <input
      v-for="field in fields"
      :key="field.key"
      v-model="data[field.key]"
      :readonly="isViewMode && !field.editable"
    /> -->
  </div>
</template>

<script>
  //   defineProps({
  //     data: {
  //       type: Object,
  //       required: true
  //     },
  //     fields: {
  //       type: Array,
  //       required: true
  //     }
  //   })
  //
  //   const mode = ref('view')
  //
  //   const setEditMode = () => {
  //     mode.value = 'edit'
  //   }
  //
  //   const setViewMode = () => {
  //     mode.value = 'view'
  //   }
  //
  //   const save = () => {
  //     // save logic
  //     setViewMode()
  //   }
  //
  //   return {
  //     isEditMode,
  //     setEditMode,
  //     setViewMode,
  //     save
  //   }
</script>
