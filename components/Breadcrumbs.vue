<template>
  <v-breadcrumbs :items="items">
    <template v-slot:prepend>
      <v-icon size="small" icon="mdi-home"></v-icon>
    </template>
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"> </v-icon>
    </template>

    <template v-slot:item="{ item }">
      <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script setup>
  const items = [
    {
      text: 'Home',
      disabled: false,
      href: '/dashboard'
    },
    {
      text: 'Link 2',
      disabled: false,
      href: '/link-2'
    },
    {
      text: 'Link 3',
      disabled: true,
      href: '/link-3'
    }
  ]
</script>
