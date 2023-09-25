<!-- see https://vuetifyjs.com/en/components/app-bars/ -->

<template>
  <v-app-bar :elevation="3" scroll-behavior="hide" density="compact">
    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>
      <v-btn icon="mdi-magnify"></v-btn>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup></script>
