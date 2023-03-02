// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBcjHOQxDHrIL5_TGPnqxZLhToUeYOd1IU',
  authDomain: 'vark-7ea53.firebaseapp.com',
  projectId: 'vark-7ea53',
  storageBucket: 'vark-7ea53.appspot.com',
  messagingSenderId: '860432264174',
  appId: '1:860432264174:web:4a4f4059647e7e2e94fcff',
  measurementId: 'G-P6L6ZY7FYK'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export default (app, analytics)
