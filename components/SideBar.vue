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
      <nuxt-link to="/">
        <v-list-item prepend-icon="mdi-home" title="Home" value="home" exact></v-list-item>
      </nuxt-link>
      <nuxt-link to="/user">
        <v-list-item prepend-icon="mdi-account" title="User account" value="user" exact></v-list-item>
      </nuxt-link>
      <nuxt-link to="/subaccount">
        <v-list-item prepend-icon="mdi-account-multiple" title="Sub account" value="subaccount" exact></v-list-item>
      </nuxt-link>
      <nuxt-link to="/settings">
        <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings" exact></v-list-item>
      </nuxt-link>
      <nuxt-link to="/projects">
        <v-list-item prepend-icon="mdi-folder" title="Projects" value="projects" exact></v-list-item>
      </nuxt-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
  const emits = defineEmits(['selectOption'])

  const selectOption = isColor => {
    emits('selectOption', isColor)
  }
</script>
