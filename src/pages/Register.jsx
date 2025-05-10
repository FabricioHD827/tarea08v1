// src/pages/Register.jsx
import React, { useState } from 'react';
import AuthService from '../Services/auth.service';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [successful, setSuccessful] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    setSuccessful(false);

    try {
      const response = await AuthService.register(form.username, form.email, form.password);
      if (response.ok) {
        setMessage("¡Registro exitoso!");
        setSuccessful(true);
      } else {
        const data = await response.json();
        setMessage(data.message || "Error al registrar.");
      }
    } catch (err) {
      setMessage("Error del servidor.");
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h3>Registro</h3>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Usuario</label>
          <input type="text" className="form-control" name="username"
            value={form.username} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email"
            value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input type="password" className="form-control" name="password"
            value={form.password} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary btn-block">Registrar</button>
      </form>

      {message && (
        <div className={`alert ${successful ? 'alert-success' : 'alert-danger'} mt-3`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Register;
