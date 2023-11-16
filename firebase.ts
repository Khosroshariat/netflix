
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-4pz7io9yJdVrYjXi3_hZBn3ru3Zix5I",
    authDomain: "netflix-project-581a3.firebaseapp.com",
    projectId: "netflix-project-581a3",
    storageBucket: "netflix-project-581a3.appspot.com",
    messagingSenderId: "424357281762",
    appId: "1:424357281762:web:82edf18ece5d8fa4fc83bb"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }