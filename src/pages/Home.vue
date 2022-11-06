<template>
  <img class="Home2-screen"
    src="~assets/images/บทเรียน.jpg">
  <div class="absolute-top text-center">
    <div class="space-between">
    <div class="q-pa-md q-gutter-sm">
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
      <br>
      <br>
      <br>
      <br>
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
