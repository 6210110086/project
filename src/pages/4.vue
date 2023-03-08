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
        <source src="~assets/audios/ภ.mp3" type="audio/mpeg">
      </audio>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/vark-7ea53.appspot.com/o/images%2F%E0%B8%A0.png?alt=media&token=a6f1456c-1652-4618-ae3e-f97d840a949f">

      <img src="~assets/images/สำเภา.jpg">
    </div>
  </div>
  <div class="q-gutter-md row">
    <q-btn color="secondary" size="xl" label="ถัดไป" class="absolute-bottom-right" @click="$router.replace('/5')" />
  </div>
  <div class="q-gutter-md row">
      <q-btn color="secondary" size="xl" class="absolute-bottom-left" label="ย้อนกลับ" @click="$router.replace('/ก')"/></div>
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
