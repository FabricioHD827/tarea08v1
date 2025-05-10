// src/pages/AdminBoard.jsx
import React, { useEffect, useState } from 'react';
import UserService from '../Services/user.service';

const AdminBoard = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard()
      .then(res => setContent(res.data))
      .catch(() => setContent("Acceso denegado."));
  }, []);

  return <div className="container"><h4>{content}</h4></div>;
};

export default AdminBoard;
