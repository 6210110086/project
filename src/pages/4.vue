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
        <source src="~assets/audios/ภ.mp3" type="audio/mpeg">
      </audio>
      <img
        src="~assets/images/ภ.jpg">

      <img src="~assets/images/สำเภา.jpg">
    </div>
  </div>
  <div class="q-gutter-md row">
    <q-btn color="primary" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/5')" />
  </div>
  <div class="q-gutter-md row">
      <q-btn color="primary"  class="absolute-bottom-left" label="BACK" @click="$router.replace('/kai')"/></div>

</template>
