<!-- see https://vuetifyjs.com/en/components/app-bars/ -->

<template>
  <v-app-bar :elevation="3" scroll-behavior="hide" density="compact">
    <template v-slot:image>
      <img
        src="https://koxtxvuakmlypmliqunx.supabase.co/storage/v1/object/public/images/public/Logo%20FlexUp%20colored%20-%2020pc%20border.svg?t=2023-09-25T21%3A19%3A07.711Z"
        alt="FlexUp Logo"
      />
    </template>
    <template v-slot:append>
      <v-btn prepend-icon="mdi-heart" variant="tonal" color="error" stacked>1</v-btn>
      <v-btn prepend-icon="mdi-heart" color="red" stacked>2</v-btn>
      <v-btn prepend-icon="mdi-magnify" stacked>3</v-btn>
      <v-btn prepend-icon="mdi-dots-vertical" stacked>4</v-btn>
      <v-btn icon="mdi-heart"></v-btn>
      <v-btn icon="mdi-magnify"></v-btn>
      <v-btn icon="mdi-dots-vertical"></v-btn>
      <v-autocomplete
        clearable
        label="Account"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="solo"
      ></v-autocomplete>
    </template>
  </v-app-bar>
</template>

<script setup></script>
