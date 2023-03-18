<template>
  <img class="void-screen" src="~assets/images/กระดาน2.jpg">
  <div class="template">
  <div class="absolute-top text-center">
    <br>
        <h1  class="text-white">ฝึกอ่านออกเสียงพยัญชนะ</h1>
  </div>
  <div class="fixed-center full-width">
    <div class="space-between">

      <audio controls>
        <source src="~assets/audios/ซ.mp3" type="audio/mpeg">
      </audio>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/vark-7ea53.appspot.com/o/images%2F%E0%B8%8B.png?alt=media&token=f1d4d2f2-19da-43f0-857c-49c5beb377b3">

      <img src="~assets/images/โซ่.png">
    </div>

  </div>

  <div class="q-gutter-md row">
      <q-btn color="secondary" size="xl" class="absolute-bottom-left" label="ย้อนกลับ" @click="$router.replace('/ช')"/></div>

<div class="q-gutter-md row">
    <q-btn color="secondary" size="xl" label="ถัดไป" class="absolute-bottom-right" @click="$router.replace('/Consonant')" />
  </div></div>
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
