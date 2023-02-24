<template>
  <router-view/>
</template>
<script>
import { defineComponent } from 'vue'
// import store from './store'
import { api } from 'boot/axios'
export default defineComponent({
  name: 'App',
  // setup () {
  //   provide('store', store)
  //   store.actions.handleAuthStateChanged()
  // }
  beforeCreate () {
    this.$store.dispatch('auth/init')
    const token = this.$store.getters.getToken
    if (token) {
      api.defaults.headers.common.Authorization = 'JWT ' + token.access
    } else {
      api.defaults.headers.common.Authorization = ''
    }
  }
})
</script>
