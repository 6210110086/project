<template>
  <img class="con-screen" src="~assets/images/พื้นหลัง.png">
  <div class="template">
  <div class="absolute-top text-center">
    <br>
        <h1>พยัญชนะ</h1>
    <div class="space-between">
    <div class="q-pa-md q-gutter-sm">
    <q-btn class="consonant-screen"  color="orange-5" label="ก  ภ  ถ  ฎ  ฏ" size="100px" @click="$router.replace('/ก')">
    </q-btn><br>
    <q-btn class="consonant-screen" color="orange-5" size="100px" @click="$router.replace('/ข')">
      <div>
        ข ฃ ช ซ
      </div>
    </q-btn>
  </div>
      </div>
    </div>
    <div class="q-gutter-md row">
      <q-btn color="secondary"  size="xl" class="absolute-bottom-left" label="ย้อนหลับ" @click="$router.replace('/Home')"/></div>
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
