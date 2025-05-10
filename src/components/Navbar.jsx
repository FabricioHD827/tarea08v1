// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/auth.service";

const Navbar = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("moderator"));
      setShowAdminBoard(user.roles.includes("admin"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    window.location.reload(); // recarga para actualizar navegación
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">MiApp</Link>
      <div className="navbar-nav mr-auto">
        {currentUser && (
          <li className="nav-item">
            <Link to="/user" className="nav-link">Usuario</Link>
          </li>
        )}

        {showModeratorBoard && (
          <li className="nav-item">
            <Link to="/mod" className="nav-link">Moderador</Link>
          </li>
        )}

        {showAdminBoard && (
          <li className="nav-item">
            <Link to="/admin" className="nav-link">Admin</Link>
          </li>
        )}
      </div>

      <div className="navbar-nav ml-auto">
        {currentUser ? (
          <>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">{currentUser.username}</Link>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link" onClick={logOut}>Salir</a>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Iniciar Sesión</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Registrarse</Link>
            </li>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
