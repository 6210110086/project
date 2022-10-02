<template>
  <img class="full-screen"
    src="https://img.pikbest.com/background/20180830/seaside-playing-cartoon-cute-background-design_2746045.jpg!c1024wm0">
  <div class="absolute-top text-center">
    <br />
    <h2>บทเรียน</h2>
    <div class="space-between">
    <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" size="100px">
      <div class="ellipsis" @click="$router.replace('/Consonant')">
        ก
        <br>
        พยัญชนะไทย
      </div>
    </q-btn>
    <q-btn color="primary" size="100px">
      <div class="ellipsis">
        -า
        <br>
        สระ
      </div>
    </q-btn>
    <q-btn color="primary" size="100px">
      <div class="ellipsis">
        ก-า
        <br>
        ประสมพยัญชนะกับสระ
      </div>
    </q-btn>
  </div>
      </div>
    </div>
    <!-- <div class="q-gutter-md row">
      <q-btn color="primary" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/')" />
    </div> -->

    <div class="q-gutter-md row">
      <q-btn color="primary"  class="absolute-bottom-left" label="BACK" @click="$router.replace('/')"/></div>

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
