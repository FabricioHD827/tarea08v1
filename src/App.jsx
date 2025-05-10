// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import UserBoard from './pages/UserBoard';
import AdminBoard from './pages/AdminBoard';
import ModeratorBoard from './pages/ModeratorBoard';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<UserBoard />} />
          <Route path="/admin" element={<AdminBoard />} />
          <Route path="/mod" element={<ModeratorBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
