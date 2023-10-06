<template>
  <ul class="m-2 w-60 divide-y divide-gray-200 rounded border">
    <li v-for="account in accounts" :key="account.id" class="flex py-4">
      <img class="ml-2 h-10 w-10 rounded-full" :src="account.icon" alt="" />
      <div class="ml-3">
        <p class="text font-medium text-gray-900">{{ account.name }}</p>
        <p class="text-sm text-gray-500">{{ account.type }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
  const accounts = [
    {
      name: 'FlexUp Dev',
      type: 'Activity',
      id: '2',
      icon: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: "Pizza d'Oro",
      type: 'Business',
      id: '3',
      icon: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Fabrizio Nastri',
      type: 'Personal',
      id: '4',
      icon: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ]

  export default {
    setup() {
      return {
        accounts
      }
    }
  }
</script>
