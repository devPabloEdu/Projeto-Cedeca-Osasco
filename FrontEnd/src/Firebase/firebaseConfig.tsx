import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBncC4V8HNKIFIka-HuW_RlCAwGHnQss9U",
    authDomain: "backendcedeca.firebaseapp.com",
    projectId: "backendcedeca",
    storageBucket: "backendcedeca.firebasestorage.app",
    messagingSenderId: "840707569744",
    appId: "1:840707569744:web:f9d836ee46258b20ed3955"
}
if (!firebase.getApps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.getApp(); // Usa a instância já inicializada
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
export const db = getFirestore(app);

