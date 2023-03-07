<template>
  <div class="wave"><img src="~assets/images/พื้นหลัง.png"></div>
  <div class="template">
    <div class="absolute-top text-center">
      <br>
      <br>
      <h1>พยัญชนะ</h1>
      <div class="space-between">
        <div class="q-pa-md q-gutter-sm">
          <q-btn class="modeconsonant-screen" color="orange-5" label="ฝึกอ่านออกเสียงพยัญชนะ" size="90px"
            @click="$router.replace('/Consonant')">
          </q-btn>
          <q-btn class="modeconsonant-screen" color="orange-5" label="ฝึกเขียนพยัญชนะ" size="90px"
            @click="$router.replace('/AboutMe')">
          </q-btn>
        </div>
      </div>
    </div>
    <div class="q-gutter-md row">
      <q-btn color="primary" size="xl" class="absolute-bottom-left" label="BACK" @click="$router.replace('/Home')" />
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
