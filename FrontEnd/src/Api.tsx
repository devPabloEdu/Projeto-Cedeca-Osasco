import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBncC4V8HNKIFIka-HuW_RlCAwGHnQss9U",
    authDomain: "backendcedeca.firebaseapp.com",
    projectId: "backendcedeca",
    storageBucket: "backendcedeca.firebasestorage.app",
    messagingSenderId: "840707569744",
    appId: "1:840707569744:web:f9d836ee46258b20ed3955",
};

// Inicialize o app do Firebase
const app = initializeApp(firebaseConfig);

// Obtenha a instância do serviço de autenticação
const auth = getAuth(app);

const API_URL = "http://localhost:5163"; // URL do backend

export const loginUser = async (email: string, password: string) => {
    try {
        // Login com email e senha usando Firebase
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // Obtém o ID Token do usuário autenticado
        const idToken = await userCredential.user.getIdToken();

        // Envia o ID Token para o backend
        const response = await axios.post(`${API_URL}/auth/login`, { idToken });
        return response.data; // Retorna a resposta do backend
    } catch (error: any) {
        console.error("Erro no login:", error.message);
        throw error;
    }
};
