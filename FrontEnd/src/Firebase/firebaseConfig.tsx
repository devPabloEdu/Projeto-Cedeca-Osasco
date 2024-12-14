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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

