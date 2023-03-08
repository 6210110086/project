// import Vue from '.vue'
import App from './App.vue'
import router from './router'
import './Firebase'
import { createApp } from 'core-js/core/object'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCu_QTgafYqbBB6TOXF0sDX0Atu_f3JCmQ',
  authDomain: 'project-b8cb4.firebaseapp.com',
  projectId: 'project-b8cb4',
  storageBucket: 'project-b8cb4.appspot.com',
  messagingSenderId: '115299217085',
  appId: '1:115299217085:web:57ea9acc2fa9445cc251d4',
  measurementId: 'G-8LGD2D2JRC'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)

app.mount('#app')
// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
