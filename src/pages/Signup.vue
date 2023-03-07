<template>
  <div  class="wave">
  <img src="~assets/images/wave.png"  alt="login-wave"></div>
  <div class="row" style="height: 90vh">
    <div class="col-0 col-md-4 flex justify-center content-center">
    </div>
    <div v-bind:class="{ 'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs }"
      class="col-12 col-md-6 flex content-center">
      <q-card v-bind:style="$q.screen.lt.sm ? { 'width': '80%' } : { 'width': '50%' }">
        <q-card-section>
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="~assets/images/sun.jpg" alt="avatar">
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-lg">
            <div class="col text-h6 ellipsis flex justify-center">
              <h2 class="text-h3 text-uppercase text-weight-regular">สร้างบัญชี</h2>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <!-- <form id="signup-form"> -->
            <!-- <q-form class="q-gutter-md" @submit="onsubmit" @reset="onReset"> -->

              <b-form-group id = "name" label="ชื่อ-นามสกุล" type="Text" v-model="form.name">
              <b-form-input
                id="name"
                v-model="form.name"
                placeholder="Enter Name"
                required>
              </b-form-input>
              </b-form-group >
              <q-input id = "name" label="ชื่อ-นามสกุล" type="Text" v-model="form.name">
              </q-input>
              <q-input label="ชั้นเรียน" type="Text" v-model="form.classuser">
              </q-input>
              <q-input label="ชื่อผู้ใช้" v-model="form.email">
              </q-input>
              <q-input label="รหัสผ่าน" type="password" v-model="form.password">
              </q-input>
              <div>
                <br>
                <q-btn class="full-width" color="primary" label="ลงทะเบียน" type="submit" rounded></q-btn>
                <div class="text-center q-mt-sm q-gutter-lg">
                  <router-link class="text-dark" to="/login"
                    @click="$router.replace('/login')">มีบัญชีอยู่แล้ว?</router-link>
                </div>
              </div>
            <!-- </q-form> -->
          <!-- </form> -->
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
// import { createObjectExpression } from "@vue/compiler-core";
import {
// getAuth,
// createUserWithEmailAndPassword,
// onAuthStateChanged
// updateProfile
} from 'firebase/auth'
export default {
  data () {
    return {
      form: {
        name: '',
        classuser: '',
        email: '',
        password: ''
      }
    }
  },
  // created () {
  //   const auth = getAuth()
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       this.$router.push('/').catch(() => {})
  //     }
  //   })
  // },
  methods: {
    // onsubmit (event) {
    //   event.preventDefault()
    //   const auth = getAuth()
    //   createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
    //     .then(async (userCredential) => {
    //       await updateProfile(userCredential.user, { displayName: this.form.name })
    //       this.$route.push('/').catch(() => {})
    //     })
    //     .catch((error) => {
    //       alert(error.message)
    //     })
    // },
    // onReset (event) {
    //   event.preventDefault()
    //   this.form.email = ''
    //   this.form.password = ''
    // }
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
