<template>
  <h1>Lorem</h1>
  <v-list>
    <!-- for 1 to 100, an <i> element with lorem x 50 -->
    <v-list-item v-for="i in 100" :key="i" prepend-icon="mdi-chevron-right">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto temporibus! Ab, fuga dolorem nihil
      soluta, dolor veritatis ipsum, vel reiciendis tempore voluptate fugiat debitis maiores error perspiciatis?
      Assumenda, reiciendis.
    </v-list-item>
  </v-list>
</template>
