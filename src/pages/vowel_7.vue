<template>
<img class="void-screen"
    src="~assets/images/ฝึกอ่านออกเสียง.jpg">
  <div class="absolute-top text-center">
     <br />
    <br />
  </div>
  <div class="fixed-center full-width">
    <div class="space-between">

      <audio controls>
        <source src="~assets/audios/short_sound/อึ.mp3" type="audio/mpeg">
      </audio>
      <img
        src="~assets/vowel/สระอึ.jpg">
      <!-- <img src="~assets/images/ฏ.jpg"> -->
    </div>
  </div>

  <div class="q-gutter-md row">
      <q-btn color="primary"  class="absolute-bottom-left" label="BACK" @click="$router.replace('/vowel_b')"/></div>

  <div class="q-gutter-md row">
    <q-btn color="primary" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/vowel_t')" />
  </div>

</template>
