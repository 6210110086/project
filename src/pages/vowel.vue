<template>
 <div class="wave"><img src="~assets/images/พื้นหลัง.png"></div>
 <div class="template">
  <div class="absolute-top text-center">
    <br>
        <h1>สระ</h1>
    <div class="space-between">
    <div class="q-pa-md q-gutter-sm">
    <q-btn color="orange-5" size="100px" @click="$router.replace('/vowel_k')">
      <div class="button-screen">
        สระเสียงยาว
      </div>
    </q-btn><br>
    <q-btn color="orange-5" size="100px" @click="$router.replace('/vowel_t')">
      <div class="button-screen">
        สระเสียงสั้น
      </div>
    </q-btn>
  </div>
      </div>
    </div>
    <div class="q-gutter-md row">
      <q-btn color="secondary"  size="xl" class="absolute-bottom-left" label="ย้อนกลับ" @click="$router.replace('/Home')"/></div>
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
