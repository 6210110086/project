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
        <source src="~assets/audios/ช.mp3" type="audio/mpeg">
      </audio>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/project-b8cb4.appspot.com/o/images%2F%E0%B8%8A.png?alt=media&token=a08ff293-d8ea-4d11-8de8-fe93bfb6962b">

      <img src="~assets/images/ช้าง.png">
    </div>

  </div>

  <div class="q-gutter-md row">
      <q-btn color="secondary" size="xl"  class="absolute-bottom-left" label="ย้อนกลับ" @click="$router.replace('/ฃ')"/></div>

<div class="q-gutter-md row">
    <q-btn color="secondary" size="xl" label="ถัดไป" class="absolute-bottom-right" @click="$router.replace('/ซ')" />
  </div>
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
