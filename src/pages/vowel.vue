<template>
  <img class="full-screen"
    src="https://img.pikbest.com/background/20180830/seaside-playing-cartoon-cute-background-design_2746045.jpg!c1024wm0">
  <div class="absolute-top text-center">
    <br />
    <h2>สระ</h2>
    <div class="space-between">
    <div class="q-pa-md q-gutter-sm">
    <q-btn color="orange-5" size="100px">
      <div class="button-screen" @click="$router.replace('/vowel_t')">
        -ะ
      </div>
    </q-btn>
    <q-btn color="orange-5" size="100px" @click="$router.replace('/vowel_k')">
      <div class="button-screen">
        -า
      </div>
    </q-btn>
    <q-btn color="orange-5" size="100px" @click="$router.replace('/vowel_b')">
      <div class="button-screen">
        -ิ
      </div>
    </q-btn>
    <q-btn color="orange-5" size="100px" @click="$router.replace('/vowel_u')">
      <div class="button-screen">
        -ี
      </div>
    </q-btn>
    <q-btn color="orange-5" size="100px" @click="$router.replace('/vowel_7')">
      <div class="button-screen">
        -ึ
      </div>
    </q-btn>
    <q-btn color="orange-5" size="100px" @click="$router.replace('/vowel_n')">
      <div class="button-screen">
        -ื
      </div>
    </q-btn>
    <q-btn color="orange-5" size="100px" @click="$router.replace('/vowel_6')">
      <div class="button-screen">
        -ุ
      </div>
    </q-btn>
    <q-btn color="orange-5" size="100px" @click="$router.replace('/vowel_^')">
      <div class="button-screen">
        -ู
      </div>
    </q-btn>
  </div>
      </div>
    </div>
    <!-- <div class="q-gutter-md row">
      <q-btn color="primary" label="NEXT" class="absolute-bottom-right" @click="$router.replace('/')" />
    </div> -->

    <div class="q-gutter-md row">
      <q-btn color="primary"  size="xl" class="absolute-bottom-left" label="BACK" @click="$router.replace('/Home')"/></div>

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
