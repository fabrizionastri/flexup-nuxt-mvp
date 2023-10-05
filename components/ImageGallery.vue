<template>
  <v-container class="boxGreen w-screen mt-2">
    <v-row no-gutters>
      <v-col v-for="n in 200" :key="n" lg="1" md="2" sm="3">
        <v-card class="ma-2 card-hover">
          <v-hover>
            <template v-slot:default>
              <v-img
                :src="getImageUrl(n)"
                :lazy-src="getLazyImageUrl(n)"
                @mouseover="() => startHover(n)"
                @mouseleave="() => stopHover(n)"
                @click="openImageInNewTab(n)"
                aspect-ratio="1"
                cover
              >
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                  </div>
                </template>
              </v-img>
            </template>
          </v-hover>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbarVisible" top right color="light-salmon" timeout="10000">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const snackbarVisible = ref(false)
  const snackbarMessage = ref('')
  const currentImageUrl = ref('') // For storing the hovered image URL

  const props = defineProps(['isWithColor'])

  let hoverTimeout // To handle the 1 second hover delay

  const getImageUrl = (n) => `https://picsum.photos/500/300?image=${n + 10}${props.isWithColor ? '' : '&grayscale'}`
  const getLazyImageUrl = (n) => `https://picsum.photos/100/60?image=${n + 10}${props.isWithColor ? '' : '&grayscale'}`

  const startHover = (n) => {
    console.log('Hovering over image:', n, 'Snackbar state:', snackbarVisible.value) // Debug log
    hoverTimeout = setTimeout(async () => {
      currentImageUrl.value = getImageUrl(n)
      try {
        // Focus the document before copying the text to the clipboard.
        document.querySelector('html').focus()

        // Copy the text to the clipboard.
        await navigator.clipboard.writeText(currentImageUrl.value)

        snackbarVisible.value = true
        snackbarMessage.value = 'Image URL copied to clipboard!'
        console.log('URL copied successfully!') // Debug log
      } catch (error) {
        console.error('Failed to copy!', error)

        snackbarVisible.value = true
        snackbarMessage.value =
          'Click on image to open it. Hover on the image to copy the image URL to the clipboard (you first need to click on the page to make it active).'
      }
    }, 1000) // 1 second delay
  }

  const stopHover = (n) => {
    snackbarVisible.value = false
    console.log('Mouse left the image:', n, 'Snackbar state:', snackbarVisible.value) // Debug log
    clearTimeout(hoverTimeout)
  }

  const openImageInNewTab = (n) => {
    window.open(getImageUrl(n), '_blank')
  }
</script>
