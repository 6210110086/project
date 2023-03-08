<template>
  <img class="vowel-screen" src="~assets/images/กระดาน2.jpg">
  <div class="template">
  <div class="absolute-top text-center">
    <br>
        <h1  class="text-white">ฝึกอ่านออกเสียงสระ</h1>
  </div>
  <div class="fixed-center full-width">
    <div class="space-between">

      <audio controls>
        <source src="~assets/audios/short_sound/โอะ.mp3" type="audio/mpeg">
      </audio>
      <img
        src="~assets/vowel/โอะ.png">
    </div>
  </div>

  <div class="q-gutter-md row">
      <q-btn color="secondary" size="xl" class="absolute-bottom-left" label="ย้อนกลับ" @click="$router.replace('/เอะ')"/></div>

      <div class="q-gutter-md row">
    <q-btn color="secondary"  size="xl" label="ถัดไป" class="absolute-bottom-right" @click="$router.replace('/เอาะ')" />
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
