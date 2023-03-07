<template>
  <img class="vowel-screen" src="~assets/images/กระดาน2.jpg">
  <div class="template">
  <div class="absolute-top text-center">
    <br>
        <h1  class="text-white">ฝึกอ่านออกเสียงสระ</h1>
    <div class="space-between">
      <audio controls>
        <source src="~assets/audios/long_sound/อา.mp3" type="audio/mpeg">
      </audio>
      <img src="https://firebasestorage.googleapis.com/v0/b/vark-7ea53.appspot.com/o/vowel%2F%E0%B8%AD%E0%B8%B2.png?alt=media&token=b1edc61b-919e-4b4f-ac91-3b98531a691a">
    </div>
  </div>

  <div class="q-gutter-md row">
      <q-btn color="secondary" size="xl" class="absolute-bottom-left" label="ย้อนกลับ" @click="$router.replace('/vowel')"/></div>

  <div class="q-gutter-md row">
    <q-btn color="secondary" size="xl" label="ถัดไป" class="absolute-bottom-right" @click="$router.replace('/vowel_u')" />
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
