<template>
  <div class="wave"><img src="~assets/images/พื้นหลัง.png"></div>
  <div class="template">
    <div class="absolute-top text-center">
      <br>
        <h1>บทเรียนฝึกอ่านออกเสียง</h1>
        <div class="q-pa-md q-gutter-sm">
          <q-btn  color="orange-5" size="100px" @click="$router.replace('/Consonant')">
            <div class="Home-screen2">
              ก
            <br>
            <h5>พยัญชนะไทย</h5></div>
          </q-btn>
        <q-btn color="orange-5" size="100px"  @click="$router.replace('/vowel')">
          <div class="Home-screen2">
            -า
            <br>
            <h5>สระ</h5>
          </div>
        </q-btn>
        <q-btn color="orange-5" size="100px" @click="$router.replace('/ขา')">
          <div class="Home-screen2">
            ก-า
            <br>
            <h5>ประสมพยัญชนะกับสระ</h5>
          </div>
        </q-btn>
      </div>
    </div><div class="q-gutter-md row">
        <q-btn color="secondary" size="xl" class="absolute-bottom-left" label="ย้อนกลับ" @click="$router.replace('/')" />
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

<style scoped>
.wave {
  position: fixed;
  width: 100%;
  z-index: -1;
}
</style>
