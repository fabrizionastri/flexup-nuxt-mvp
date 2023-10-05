<!-- see https://vuetifyjs.com/en/components/app-bars/ -->

<template>
  <v-app-bar :elevation="3" scroll-behavior="hide" density="default">
    <template v-slot:image>
      <img
        src="https://koxtxvuakmlypmliqunx.supabase.co/storage/v1/object/public/images/public/Logo%20FlexUp%20colored%20-%2020pc%20border.svg?t=2023-09-25T21%3A19%3A07.711Z"
        alt="FlexUp Logo"
      />
    </template>
    <template v-slot:append>
      <v-btn prepend-icon="mdi-heart" color="red" stacked>2</v-btn>
      <v-btn prepend-icon="mdi-magnify" stacked>3</v-btn>
      <v-btn prepend-icon="mdi-dots-vertical" stacked>4</v-btn>
      <v-btn icon="mdi-heart"></v-btn>
      <v-btn icon="mdi-magnify"></v-btn>
      <v-btn icon="mdi-dots-vertical"></v-btn>
      <v-btn icon="mdi-account" class="bg-grey-lighten-3"></v-btn>
      <accounts-menu />
    </template>
  </v-app-bar>
</template>
