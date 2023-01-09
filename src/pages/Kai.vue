<template>
  <img class="void-screen"
    src="~assets/images/กระดาน.jpg">
  <div class="absolute-top text-center">
    <br />
  </div>
  <div class="fixed-center full-width">
    <div class="space-between">
      <div class="img-odo"><audio controls>
        <source src="~assets/audios/กอ.mp3" type="audio/mpeg">
      </audio></div>
      <div class="img-kai1"><img src="~assets/images/ก.png"></div>
      <div class="img-kai2"><img src="~assets/images/ไก่เล็ก.png"></div>
    </div>
  </div>
  <div class="q-gutter-md row">
    <q-btn color="primary" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/4')" />
  </div>
  <div class="q-gutter-md row">
      <q-btn color="primary"  class="absolute-bottom-left" label="BACK" @click="$router.replace('/Consonant')"/></div>
</template>
