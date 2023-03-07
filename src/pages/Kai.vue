<template>
  <img class="void-screen" src="~assets/images/กระดาน2.jpg">
  <div class="template">
  <div class="absolute-top text-center">
    <br>
        <h1  class="text-white">ฝึกอ่านออกเสียงพยัญชนะ</h1>
  </div>
  <div class="fixed-center full-width">
    <div class="space-between">
      <div class="img-odo"><audio controls>
        <source src="https://firebasestorage.googleapis.com/v0/b/vark-7ea53.appspot.com/o/audios%2F%E0%B8%81.mp3?alt=media&token=f698f9c1-0a25-494c-9479-10792b2f175a" type="audio/mpeg">
      </audio></div>
      <div class="img-kai1"><img src="https://firebasestorage.googleapis.com/v0/b/vark-7ea53.appspot.com/o/images%2F%E0%B8%81.png?alt=media&token=cf288e3b-3236-4e2c-a6a6-23916a5c26dd"></div>
      <div class="img-kai2"><img src="https://firebasestorage.googleapis.com/v0/b/vark-7ea53.appspot.com/o/images%2F%E0%B9%84%E0%B8%81%E0%B9%88%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81.png?alt=media&token=d8979336-cf3f-41cf-9d3f-d45eef26d920"></div>
    </div>
  </div>
  <div class="q-gutter-md row">
    <q-btn color="secondary" size="xl" label="ถัดไป" class="absolute-bottom-right" @click="$router.replace('/4')"/></div>
    <div class="q-gutter-md row">
      <q-btn color="secondary" size="xl" class="absolute-bottom-left" label="ย้อนกลับ" @click="$router.replace('/Consonant')"/></div>
      </div>
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

<style scoped>
.wave {
  position: fixed;
  width: 100%;
  z-index: -1;
}
</style>
