<template>
  <img class="vowel-screen"
    src="~assets/images/ฝึกอ่านออกเสียง.jpg">
  <div class="absolute-top text-center">
     <br>
  </div>
  <div class="fixed-center full-width">
    <div class="space-between">

      <audio controls>
        <source src="~assets/audios/สระอิ.mp3" type="audio/mpeg">
      </audio>
      <img
        src="~assets/vowel/สระอิ.jpg">
    </div>
  </div>

  <div class="q-gutter-md row">
      <q-btn color="primary"  class="absolute-bottom-left" label="BACK" @click="$router.replace('/vowel_6')"/></div>

  <div class="q-gutter-md row">
    <q-btn color="primary" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/vowel_7')" />
  </div>

</template>
