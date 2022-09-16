<template>
  <img class="full-screen"
    src="https://img.pikbest.com/background/20180830/seaside-playing-cartoon-cute-background-design_2746045.jpg!c1024wm0">
  <div class="absolute-top text-center">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>ฝึกอ่านออกเสียง</h2>
  </div>
  <div class="fixed-center full-width">
    <!-- <div class="q-gutter-md row"> -->
    <div class="space-between">
      <audio controls>
        <source src="~assets/audios/เสียงก.mp3" type="audio/mpeg">
      </audio>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAj3nG-13VNusUdB_YIrnbvPcsz56gV5rGPGxCnZOf4JbfdMmgqm5feCwD4VAI9Qk29m0&usqp=CAU">
      <img src="~assets/images/ไก่.png">
    </div>
    <!-- </div> -->
  </div>
  <div class="q-gutter-md row">
    <q-btn color="primary" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/AboutMe')" />
  </div>
</template>
