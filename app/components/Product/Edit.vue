<template>
  <div class="mb-4">
    <h2 class="mb-2 text-lg font-bold text-gray-700">Product name</h2>
    <div class="grid grid-cols-2 gap-8">
      <!-- Left Column -->
      <div>
        <FormCombo
          :label="supplier.label"
          :list="supplier.list"
          :valueWidth="supplier.valueWidth"
          :labelWidth="supplier.labelWidth"
        />
        <FormCombo
          :label="client.label"
          :list="client.list"
          :valueWidth="client.valueWidth"
          :labelWidth="client.labelWidth"
        />
        <FormCombo
          :label="currency.label"
          :list="currency.list"
          :valueWidth="currency.valueWidth"
          :labelWidth="currency.labelWidth"
        />
      </div>
      <div>
        <FormInput />
        <FormInput />
        <FormInput />
      </div>
    </div>
  </div>
</template>

<script setup>
  const supplier = reactive({
    label: 'Supplier',
    list: [
      { id: '1', label: 'Supplier One' },
      { id: '2', label: 'Supplier Two' },
      { id: '3', label: 'Supplier Three' }
    ],
    labelWidth: 3,
    valueWidth: 9
  })
  const client = reactive({
    label: 'Client',
    list: [
      { id: '1', label: 'Client One' },
      { id: '2', label: 'Client Two' },
      { id: '3', label: 'Client Three' }
    ],
    labelWidth: 3,
    valueWidth: 9
  })
  const currency = reactive({
    label: 'Currency',
    list: [
      { id: 'USD', label: '$' },
      { id: 'EUR', label: '€' },
      { id: 'JPY', label: '￥' }
    ],
    labelWidth: 3,
    valueWidth: 5
  })
</script>
