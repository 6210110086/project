<template>
  <img class="void-screen"
    src="~assets/images/กระดาน.jpg">
  <div class="absolute-top text-center">
  </div>
  <div class="fixed-center full-width">
    <div class="space-between">
      <div class="img-odo"><audio controls>
        <source src="~assets/audios/ขา.mp3" type="audio/mpeg">
      </audio></div>
      <div class="img-resize"><img src="~assets/Mix/ขา1.png"></div>
      <div class="img-re"><img src="~assets/images/ขา.png"></div>
    </div>
  </div>
  <div class="q-gutter-md row">
    <q-btn color="primary" size="xl" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/4')" />
  </div>

  <div class="q-gutter-md row">
      <q-btn color="primary" size="xl"  class="absolute-bottom-left" label="BACK" @click="$router.replace('/ModeCon')"/></div>
</template>

<script>
export default {
  setup () {
    return {
      sizes: ['xs', 'sm', 'md', 'lg', 'xl', 'xl'],
      icons: [
        'navigation',
        'add_a_photo',
        'camera',
        'camera_front',
        'my_location'
      ]
    }
  }
}
</script>
