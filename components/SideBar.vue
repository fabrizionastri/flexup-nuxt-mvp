<template>
  <!-- expand-on-hover was removed -->
  <v-navigation-drawer rail expand-on-hover style="padding-left: 0px" app>
    <v-list>
      <v-list-item
        prepend-avatar="https://i.pinimg.com/1200x/e3/ba/82/e3ba820967cd9642403064f684a9afb2.jpg"
        title="Fabrizio Nastri"
        subtitle="fabrizio.nastri@gmailcom"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-image"
        title="Coloured Gallery"
        value="couloured"
        @click="selectOption(true)"></v-list-item>
      <v-list-item
        prepend-icon="mdi-dialpad"
        title="Gray Gallery"
        value="gray"
        @click="selectOption(false)"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
  const emits = defineEmits(['selectOption'])

  const selectOption = isColor => {
    emits('selectOption', isColor)
  }
</script>
