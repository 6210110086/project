<template>
  <img class="full-screen"
    src="https://img.pikbest.com/background/20180830/seaside-playing-cartoon-cute-background-design_2746045.jpg!c1024wm0">
  <div class="absolute-top text-center">
    <br />
    <h2>บทเรียน</h2>
    <div class="space-between">
    <div class="q-pa-md q-gutter-sm">
    <q-btn color="orange-5" size="100px">
      <div class="Home-screen" @click="$router.replace('/Consonant')">
        ก
        <br>
        <h2>พยัญชนะไทย</h2>
      </div>
    </q-btn>
    <q-btn color="orange-5" size="100px">
      <div class="Home-screen" @click="$router.replace('/vowel')">
        -า
        <br>
        <h2>สระ</h2>
      </div>
    </q-btn>
    <q-btn color="orange-5" size="100px">
      <div class="Home-screen">
        ก-า
        <br>
        <h3>ประสมพยัญชนะกับสระ</h3>
      </div>
    </q-btn>
  </div>
      </div>
    </div>
    <!-- <div class="q-gutter-md row">
      <q-btn color="primary" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/')" />
    </div> -->

    <div class="q-gutter-md row">
      <q-btn color="primary"  size="xl" class="absolute-bottom-left" label="BACK" @click="$router.replace('/')"/></div>

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
