<template>
  <img class="void-screen"
    src="~assets/images/กระดาน.jpg">
  <div class="absolute-top text-center">
     <br />
    <br />
  </div>
  <div class="fixed-center full-width">
    <div class="space-between">

      <audio controls>
        <source src="~assets/audios/เกาะ.mp3" type="audio/mpeg">
      </audio>
      <img
        src="~assets/Mix/เกาะ1.png">

      <img src="~assets/images/เกาะ.png">
    </div>
  </div>
  <div class="q-gutter-md row">
    <q-btn color="primary" size="xl" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/ถู')" />
  </div>
  <div class="q-gutter-md row">
      <q-btn color="primary" size="xl" class="absolute-bottom-left" label="BACK" @click="$router.replace('/ขา')"/></div>

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
