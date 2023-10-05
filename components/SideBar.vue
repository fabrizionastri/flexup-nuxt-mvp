<template>
  <v-navigation-drawer :rail="expandOnHover" :expand-on-hover="expandOnHover" style="padding-left: 0px" app>
    <!-- first button toggles whether the  side bar expands on hover or remains open -->
    <!-- tooltip="Toggle sidebar" -->

    <!-- :title="expandOnHover ? 'Auto-hide sidebar' : 'Fixed sidebar'" -->
    <v-list-item
      :prepend-icon="expandOnHover ? 'mdi-chevron-triple-left' : 'mdi-chevron-triple-right'"
      value=""
      @click="expandOnHover = !expandOnHover"
      exact
    ></v-list-item>

    <!-- <v-divider></v-divider> -->

    <v-list density="compact" nav>
      <nuxt-link to="/">
        <v-list-item prepend-icon="mdi-home" title="Home" value="home" exact></v-list-item>
      </nuxt-link>
      <nuxt-link to="/lorem">
        <v-list-item prepend-icon="mdi-account" title="Lorem" value="user" exact></v-list-item>
      </nuxt-link>
      <nuxt-link to="/lorem/plop">
        <v-list-item prepend-icon="mdi-account-multiple" title="Lorem plop" value="subaccount" exact></v-list-item>
      </nuxt-link>
      <nuxt-link to="/">
        <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings" exact></v-list-item>
      </nuxt-link>
      <nuxt-link to="/">
        <v-list-item prepend-icon="mdi-folder" title="Projects" value="projects" exact></v-list-item>
      </nuxt-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
// const emits = defineEmits(['emitExpandOnHover'])
const expandOnHover = ref(false)
</script>
