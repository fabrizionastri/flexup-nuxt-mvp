<!-- see https://vuetifyjs.com/en/components/app-bars/ -->

<template>
  <v-app-bar :elevation="3" scroll-behavior="hide" class="bg-grey-lighten-4">
    <nuxt-link to="/lorem">Lorem</nuxt-link>
    <nuxt-link to="/sample">Sample</nuxt-link>
    <template v-slot:append>
      This is my nav bar
      <v-btn prepend-icon="mdi-heart" variant="tonal" color="error" stacked>1</v-btn>
      <v-btn prepend-icon="mdi-heart" color="red" stacked>2</v-btn>
      <v-btn prepend-icon="mdi-magnify" stacked>3</v-btn>
      <v-btn prepend-icon="mdi-dots-vertical" stacked>4</v-btn>
      !!! nice
    </template>
  </v-app-bar>
</template>

<script setup></script>
