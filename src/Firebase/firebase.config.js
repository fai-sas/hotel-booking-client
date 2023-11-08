// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//    authDomain: import.meta.VITE_AUTHDOMAIN,
//   authDomain: 'hotel-booking-1f71b.firebaseapp.com',
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// }

const firebaseConfig = {
  apiKey: 'AIzaSyAmqUYbEt-kpccIzmcGdi8eFvDMOPiXxXM',
  authDomain: 'hotel-booking-1f71b.firebaseapp.com',
  projectId: 'hotel-booking-1f71b',
  storageBucket: 'hotel-booking-1f71b.appspot.com',
  messagingSenderId: '507314638117',
  appId: '1:507314638117:web:1486695c0969ae2bd8decc',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
