<template>
  <img class="full-screen"
    src="~assets/images/bink.jpg">
  <div class="absolute-top text-center">
    <br />
    <h2>MOED</h2>
    <div class="space-between">
    <div class="q-pa-md q-gutter-sm">
    <q-btn color="orange-6" size="100px" @click="$router.replace('/Home')">
      <div>
        <q-icon name="book"></q-icon>
        <br>
        การเรียนรู้
      </div>
    </q-btn>

    <q-btn color="primary" size="100px">
      <div class="ellipsis">
        <q-icon name="book"></q-icon>
        <br>
        เกมวัดผล
      </div>
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
