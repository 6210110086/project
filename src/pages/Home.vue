<template>
  <div class="wave"><img src="~assets/images/พื้นหลัง.png"></div>
  <div class="template">
    <div class="absolute-top text-center">
      <br>
        <h1>บทเรียน</h1>
        <div class="q-pa-md q-gutter-sm">
          <q-btn color="orange-5" size="60px"><div class="Home-screen2">
              ก
            <h5>พยัญชนะไทย</h5> </div>
            <q-card-section horizontal>
          <q-card-actions vertical class="justify-around q-px-md">
            <q-btn color="brown-6" label="ฝึกอ่านออกเสียงพยัญชนะ" size="20px"
              @click="$router.replace('/Consonant')"></q-btn>
              <br>
            <q-btn color="brown-6" label="ฝึกเขียนพยัญชนะ" size="20px" @click="$router.replace('/AboutMe')"></q-btn>
          </q-card-actions>
        </q-card-section>
          </q-btn>
        <br>
        <q-btn color="orange-5" size="60px">
          <div class="Home-screen1">
            -า
            <br>
            <h5>สระ</h5>
          </div>
          <q-card-section horizontal>
          <q-card-actions vertical class="justify-around q-px-md">
            <q-btn color="brown-6" label="ฝึกอ่านออกเสียงสระ" size="20px"
              @click="$router.replace('/vowel')"></q-btn>
              <br>
            <q-btn color="brown-6" label="ฝึกเขียนสระ" size="20px" @click="$router.replace('/AboutMe')"></q-btn>
          </q-card-actions>
        </q-card-section>
        </q-btn>
        <br>
        <q-btn color="orange-5" size="60px">
          <div class="Home-screen">
            ก-า
            <br>
            <h5>ประสมพยัญชนะกับสระ</h5>
          </div>
          <q-card-section horizontal>
          <q-card-actions vertical class="justify-around q-px-md">
            <q-btn color="brown-6" label="ฝึกอ่านออกเสียงประสมพยัญชนะกับสระ" size="20px"
              @click="$router.replace('/ขา')"></q-btn>
              <br>
            <q-btn color="brown-6" label="ฝึกเขียนประสมพยัญชนะกับสระ" size="20px" @click="$router.replace('/AboutMe')"></q-btn>
          </q-card-actions>
        </q-card-section>
        </q-btn>
      </div>
    </div>
    <div class="q-gutter-md row">
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
