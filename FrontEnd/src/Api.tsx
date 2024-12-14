import axios from 'axios';

const API_URL = 'http://localhost:5163'; // URL do seu backend .NET

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;  // Retorna o token de login
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro de login');
  }
};

export const createPost = async (title, content, imageUrl) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, { title, content, imageUrl });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao criar post');
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao carregar posts');
  }
};