<template>
  <v-carousel
    class="boxBlue"
    style="
      height: 10cm;
      width: 80%;
      align-self: center;
      justify-content: center;
      margin: auto;
      margin-top: 30px;
      padding: 0px;
    "
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      class="boxYellow"
    >
      <div
        class="boxRed"
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-inline: 80px;
          padding: 20px;
        "
      >
        <div class="boxGreen">
          <v-icon :size="item.size" :color="item.color" :icon="item.icon"> </v-icon>
        </div>
        <em> {{ item.icon }} </em> <br />
        <p class="boxGreen">
          <code>
            {{ item }}
          </code>
        </p>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const items = [
  {
    size: 'small',
    color: 'green-darken-2',
    icon: 'mdi-domain'
  },
  {
    size: 'medium',
    color: 'blue-darken-2',
    icon: 'mdi-message-text'
  },
  {
    size: 'large',
    color: 'purple-darken-2',
    icon: 'mdi-dialpad'
  },
  {
    size: 'x-large',
    color: 'teal-darken-2',
    icon: 'mdi-email'
  },
  {
    size: 'large',
    color: 'blue-grey-darken-2',
    icon: 'mdi-call-split'
  },
  {
    size: 'large',
    color: 'orange-darken-2',
    icon: 'mdi-arrow-up-bold-box-outline'
  },
  {
    size: 'small',
    color: 'green-darken-2',
    icon: 'mdi-domain'
  },
  {
    size: 'medium',
    color: 'blue-darken-2',
    icon: 'mdi-message-text'
  },
  {
    size: 'large',
    color: 'purple-darken-2',
    icon: 'mdi-dialpad'
  },
  {
    size: 'x-large',
    color: 'teal-darken-2',
    icon: 'mdi-email'
  },
  {
    size: 'large',
    color: 'blue-grey-darken-2',
    icon: 'mdi-call-split'
  },
  {
    size: 'large',
    color: 'orange-darken-2',
    icon: 'mdi-arrow-up-bold-box-outline'
  }
]
</script>
