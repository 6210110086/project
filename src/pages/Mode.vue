<template>
  <div class="wave"><img src="~assets/images/พื้นหลัง.png"></div>
  <div class="template">
    <div class="absolute-top text-center">
      <br>
      <br>
      <br>
        <h1>หมวดหมู่การเรียนรู้</h1>
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="orange-6" size="60px" @click="$router.replace('/Home')">
          <div>
            <q-icon name="book"></q-icon><br>การเรียนรู้
          </div>
        </q-btn>
        <br>
        <br>
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
<style scoped>
.wave {
  position: fixed;
  width: 100%;
  height: 873px;
  z-index: -1;
}</style>
