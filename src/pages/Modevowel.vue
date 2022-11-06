<template>
  <img class="vowel-screen"
    src="~assets/images/สระ.jpg">
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
    <q-btn color="orange-5" size="100px" @click="$router.replace('/vowel_k')">
      <div class="button-screen">
        ฝึกอ่านออกเสียงสระ
        </div>
    </q-btn><br>
    <q-btn color="orange-5" size="100px" @click="$router.replace('/vowel_b')">
      <div class="button-screen">
        ฝึกเขียนสระ
      </div>
    </q-btn>
  </div>
      </div>
    </div>
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
