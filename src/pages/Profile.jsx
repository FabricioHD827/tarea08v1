// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';
import AuthService from '../Services/auth.service';

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    setUser(currentUser);
  }, []);

  return (
    <div className="container">
      <h3>Perfil del Usuario</h3>
      <p><strong>Usuario:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Roles:</strong> {user.roles && user.roles.join(', ')}</p>
    </div>
  );
};

export default Profile;
