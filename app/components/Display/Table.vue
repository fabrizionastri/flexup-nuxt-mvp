<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th v-for="(key, index) in objectKeys" :key="index">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obj, index) in dataArray" :key="index">
          <td v-for="(key, keyIndex) in objectKeys" :key="keyIndex">{{ obj[key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { computed, defineProps } from 'vue'

  const props = defineProps({
    dataArray: {
      type: Array,
      required: true
    }
  })

  const objectKeys = computed(() => {
    return props.dataArray.length > 0 ? Object.keys(props.dataArray[0]) : []
  })
</script>

<style scoped>
  .table-container {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }
</style>
