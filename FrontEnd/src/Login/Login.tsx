import React, { useState } from 'react';
import { loginUser } from '../Api.tsx'; // Importando função centralizada
import { BiSolidLogInCircle } from "react-icons/bi";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password); // Chamando API centralizada
      setToken(data.Token);
      localStorage.setItem('token', data.Token);
      window.location.href = '/posts';
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='LoginBox'>
      <div>
      <h2>Seja bem vindo</h2>
      </div>

      <div className='inputsbox'>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='buttonlogin'><button type="submit"><BiSolidLogInCircle /></button></div>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
