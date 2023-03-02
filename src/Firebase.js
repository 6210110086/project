// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
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
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export default (app, analytics)
