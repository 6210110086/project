<template><div class="grid">
  <img class="mode-screen"
    src="~assets/images/หมวดหมู่การเรียนรู้.jpg">
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
    <br>
    <br>
    <div class="q-pa-md q-gutter-sm">
    <q-btn color="orange-6" size="60px" @click="$router.replace('/Home')">
    <!-- <q-btn color="orange-6" size="60px" @click="$router.replace('/test')"> -->
      <div>
        <q-icon name="book"></q-icon><br>การเรียนรู้</div></q-btn>
    <q-btn color="primary" size="60px" @click="$router.replace('/about')">
      <div><q-icon name="font_download"></q-icon><br>เกมวัดผล</div>
    </q-btn>
  </div>
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
