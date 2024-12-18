import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';


const API_URL = 'http://localhost:5163'; // URL do backend

export const loginUser = async (email, password) => {
  try {
    // Realiza o login no Firebase usando e-mail e senha
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);

    // Obtém o ID Token do usuário autenticado
    const idToken = await userCredential.user.getIdToken(); // Deve retornar um token válido

    // Envia o ID Token para o backend
    const response = await axios.post(`${API_URL}/auth/login`, { idToken });
    return response.data; // Retorna a resposta do backend
  } catch (error) {
    console.error("Erro no login:", error.message);
    throw error;
  }
};
