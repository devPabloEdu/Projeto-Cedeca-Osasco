import React, { useState } from 'react';
import { loginUser } from '../Api.tsx';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        // Chama a API .NET para autenticação com Firebase
        const data = await loginUser(email, password);
        setToken(data.Token);  // Armazena o token recebido
        localStorage.setItem('token', data.Token);  // Armazena o token no LocalStorage
        window.location.href = '/posts';  // Redireciona para a página de posts
      } catch (err) {
        setError(err.message);  // Exibe o erro, caso haja falha
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  };
  
  export default Login;