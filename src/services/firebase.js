
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


const projectId = import.meta.env.VITE_PROJECT_ID || false
const appId = import.meta.env.VITE_APP_ID || false
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET || false
const apiKey = import.meta.env.VITE_API_KEY || false
const authDomain = import.meta.env.VITE_AUTH_DOMAIN || false
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID || false

export const app = firebase.initializeApp({
  apiKey,
  authDomain,
  projectId, 
  storageBucket,
  messagingSenderId,
  appId
})

export const google = new firebase.auth.GoogleAuthProvider()
