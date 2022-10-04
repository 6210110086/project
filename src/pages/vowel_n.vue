<template>
  <img class="full-screen"
    src="https://img.pikbest.com/background/20180830/seaside-playing-cartoon-cute-background-design_2746045.jpg!c1024wm0">
  <div class="absolute-top text-center">
     <br />
    <br />
    <h2>ฝึกอ่านออกเสียง</h2>
  </div>
  <div class="fixed-center full-width">
    <div class="space-between">

      <audio controls>
        <source src="~assets/audios/สระอื.mp3" type="audio/mpeg">
      </audio>
      <img
        src="~assets/vowel/สระอื.jpg">
      <!-- <img src="~assets/images/ฏ.jpg"> -->
    </div>
  </div>

  <div class="q-gutter-md row">
      <q-btn color="primary"  class="absolute-bottom-left" label="BACK" @click="$router.replace('/vowel_7')"/></div>

  <div class="q-gutter-md row">
    <q-btn color="primary" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/vowel_6')" />
  </div>

</template>
