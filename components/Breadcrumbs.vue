<template>
  <v-breadcrumbs :items="items" color="grey-lighten-1">
    <template v-slot:prepend>
      <v-icon size="small" icon="mdi-home" color="grey-lighten-1"></v-icon>
    </template>

    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right" color="grey-lighten-1"> </v-icon>
    </template>

    <template v-slot:item="{ item }" color="grey-lighten-1">
      <v-breadcrumbs-item :to="item.href" :disabled="item.disabled"> {{ item.text }} </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const items = ref([])

  watch(
    route,
    () => {
      const pathSegments = route.path.split('/').filter(segment => segment)
      items.value = pathSegments.map((segment, index, array) => {
        return {
          text: segment.charAt(0).toUpperCase() + segment.slice(1),
          disabled: index === array.length - 1,
          href: '/' + array.slice(0, index + 1).join('/')
        }
      })

      items.value.unshift({
        text: 'Home',
        disabled: false,
        href: '/'
      })
    },
    { immediate: true }
  )
</script>
