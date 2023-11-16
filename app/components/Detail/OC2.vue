<!-- ChatGPT -->
<template>
  <div>
    <div v-if="mode === 'view'">
      <div>
        <label>Order ID:</label>
        <span>{{ order.id }}</span>
      </div>
      <div>
        <label>Supplier Account ID:</label>
        <span>{{ order.supplierAccountId }}</span>
      </div>
      <div>
        <label>Client Account ID:</label>
        <span>{{ order.clientAccountId }}</span>
      </div>
      <!-- ... other non-editable fields ... -->
      <button @click="switchToEditMode">Edit</button>
    </div>

    <div v-else>
      <div>
        <label>Order ID:</label>
        <input v-model="editableOrder.id" />
      </div>
      <div>
        <label>Supplier Account ID:</label>
        <input v-model="editableOrder.supplierAccountId" />
      </div>
      <div>
        <label>Client Account ID:</label>
        <input v-model="editableOrder.clientAccountId" />
      </div>
      <!-- ... other editable fields ... -->
      <button @click="saveChanges">Save</button>
      <button @click="discardChanges">Discard</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  defineProps({
    order: {
      type: Object,
      required: true
    },
    fields: {
      type: Array,
      required: true
    }
  })

  const editableOrder = ref({ ...order.value })

  const mode = ref('view')

  function switchToEditMode() {
    editableOrder.value = { ...order.value }
    mode.value = 'edit'
  }

  function saveChanges() {
    order.value = { ...editableOrder.value }
    mode.value = 'view'
    // Here, you might want to send the updated data back to the server
  }

  function discardChanges() {
    editableOrder.value = { ...order.value }
    mode.value = 'view'
  }
</script>
