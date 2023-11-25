<template>
  <div class="flex py-2" v-if="account && account.id">
    <img id="img1" class="ml-2 h-12 w-12 rounded-full" :src="account.avatar" alt="" />
    <div class="ml-1">
      <p class="text font-medium leading-tight text-gray-900">{{ account.name }}</p>
      <p class="text-xs text-gray-500">
        Type: {{ account.type }} {{ account.symbol }} / My role: {{ account.role }}
        {{ account.roleSymbol }}
      </p>
      <p class="text-xs text-gray-500">
        Owner: {{ account.ownerName }} ({{ account.ownerType }}{{ account.ownerSymbol }})
      </p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['account'])
  if (props.account === null) navigateTo('/login')
</script>
