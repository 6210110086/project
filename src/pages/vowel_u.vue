<template>
  <!-- <q-responsive :ratio="16/9"> -->
  <!-- <div :style="{'background-image':'url(https://vuejs.org/images/logo.png)'}"/> -->
  <!-- <div class="space-between"> -->
  <img class="vowel-screen" src="~assets/images/กระดาน.jpg">
  <div :style="image">
  <div class="container">
    <div class="fixed-center full-width">
      <div class="space-between">
        <audio controls><source src="~assets/audios/long_sound/อี.mp3" type="audio/mpeg"></audio>
        <img src="~assets/vowel/อี.png">
      </div>
    </div>
  </div>
  <!-- </div> -->
  <div class="q-gutter-md row">
    <q-btn color="primary" size="xl" class="absolute-bottom-left" label="BACK" @click="$router.replace('/vowel_k')" />
  </div>

  <div class="q-gutter-md row">
    <q-btn color="primary" size="xl" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/vowel_n')" />
  </div>
</div>
  <!-- </q-responsive> -->
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
  },
  data () {
    return {
      image: { backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/project-b8cb4.appspot.com/o/background%2F%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B2%E0%B8%99.jpg?alt=media&token=9bd6d8ac-ef24-45ad-90af-5736b3c19163)' }
    }
  }
}
</script>

<!-- <style>
.main {
  background-image: url("~assets/images/กระดาน.jpg");
}
</style> -->
