// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMhIIMPIhU9aaz-mB1bdmQiQlF4fW9PW0',
  authDomain: 'house-marketplace-app-28df7.firebaseapp.com',
  projectId: 'house-marketplace-app-28df7',
  storageBucket: 'house-marketplace-app-28df7.appspot.com',
  messagingSenderId: '586180287866',
  appId: '1:586180287866:web:454900700f3257b64acac3',
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)
export const db = getFirestore()
