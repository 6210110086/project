<template>
  <img class="con-screen"
    src="~assets/images/พยัญชนะ.jpg">
  <div class="absolute-top text-center">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="space-between">
    <div class="q-pa-md q-gutter-sm">
      <q-btn class="absolute-bottom-right" color="orange-5" label="ก ภ ถ ฎ ฏ" size="30px">
    </q-btn><br>

    <q-btn class="modeconsonant-screen"  color="orange-5" label="ฝึกอ่านออกเสียงพยัญชนะ" size="90px" @click="$router.replace('/Kai')">
    </q-btn><br>
    <q-btn class="modeconsonant-screen" color="orange-5" size="90px" @click="$router.replace('/AboutMe')">
      <div>
        ฝึกเขียนพยัญชนะ
      </div>
    </q-btn>
  </div>
      </div>
    </div>
    <!-- <div class="q-gutter-md row">
      <q-btn color="primary" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/')" />
    </div> -->

    <div class="q-gutter-md row">
      <q-btn color="primary"  size="xl" class="absolute-bottom-left" label="BACK" @click="$router.replace('/Consonant')"/></div>

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
