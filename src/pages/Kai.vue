<template>
  <!-- บรรทัดที่ 2-3 แสดงรูปพื้นหลังโดยจะดึงรูปจาก folder : assets->images->ฝึกอ่านออกเสียง.jpg -->
  <img class="void-screen"
    src="~assets/images/ฝึกอ่านออกเสียง.jpg">
  <div class="absolute-top text-center">
    <br />
  </div>
  <div class="fixed-center full-width">
    <div class="space-between">
      <audio controls>
        <source src="~assets/audios/เสียงก.mp3" type="audio/mpeg">
      </audio>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAj3nG-13VNusUdB_YIrnbvPcsz56gV5rGPGxCnZOf4JbfdMmgqm5feCwD4VAI9Qk29m0&usqp=CAU">

        <img src="~assets/images/ไก่.jpg">
    </div>
  </div>
  <div class="q-gutter-md row">
    <q-btn color="primary" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/4')" />
  </div>

  <div class="q-gutter-md row">
      <q-btn color="primary"  class="absolute-bottom-left" label="BACK" @click="$router.replace('/ModeCon')"/></div>
</template>
