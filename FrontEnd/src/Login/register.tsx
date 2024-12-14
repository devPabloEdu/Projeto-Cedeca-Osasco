import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';

const API_URL = 'http://localhost:5163'; // URL do seu backend .NET

export const loginUser = async (email, password) => {
  try {
    // Realiza o login no Firebase usando email e senha
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);

    // Obtém o ID token do Firebase
    const idToken = await userCredential.user.getIdToken();

    // Envia o token de ID para o backend
    const response = await axios.post(`${API_URL}/auth/login`, { email, password: idToken });
    return response.data;  // Retorna a resposta do backend (exemplo: UID ou token)
  } catch (error) {
    throw new Error(error.message);
  }
};
