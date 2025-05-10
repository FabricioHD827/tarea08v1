// src/pages/UserBoard.jsx
import React, { useEffect, useState } from 'react';
import UserService from '../Services/user.service';

const UserBoard = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard()
      .then(res => setContent(res.data))
      .catch(() => setContent("No autorizado."));
  }, []);

  return <div className="container"><h4>{content}</h4></div>;
};

export default UserBoard;
