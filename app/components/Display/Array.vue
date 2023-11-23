<template>
  <div>
    <ul>
      <li v-for="(item, index) in value" :key="index">
        <details>
          <summary>{{ item.id }}</summary>
          <div class="ml-3 mt-2 text-xs">
            <DisplayValue :value="item" />
          </div>
        </details>
      </li>
    </ul>
  </div>
</template>

<script setup>
  defineProps({
    value: {
      type: Array,
      required: true
    }
  })
</script>
