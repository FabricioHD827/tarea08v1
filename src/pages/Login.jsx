// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../Services/auth.service';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      await AuthService.login(username, password);
      navigate("/profile");
      window.location.reload();
    } catch (error) {
      setMessage("Error al iniciar sesión");
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h3>Iniciar sesión</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Usuario</label>
          <input type="text" className="form-control" value={username}
            onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input type="password" className="form-control" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary btn-block">Login</button>
        {message && <div className="alert alert-danger mt-2">{message}</div>}
      </form>
    </div>
  );
};

export default Login;
