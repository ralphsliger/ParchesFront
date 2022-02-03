import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const projectId = import.meta.env.VITE_PROJECT_ID || 'parches-final'
const appId = import.meta.env.VITE_APP_ID || '1:137898043687:web:552540ef7292c7d6532102'
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET || 'parches-final.appspot.com'
const apiKey = import.meta.env.VITE_API_KEY || 'AIzaSyAbA1zwGW0JdPZFI7ysiB9atOgWD0oZ-CQ'
const authDomain = import.meta.env.VITE_AUTH_DOMAIN || 'parches-final.firebaseapp.com'
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID || '137898043687'

export const app = firebase.initializeApp({
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
})

export const google = new firebase.auth.GoogleAuthProvider()
