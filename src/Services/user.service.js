// src/services/user.service.js
const API_URL = "http://localhost:3000/api/test/";

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return { Authorization: `Bearer ${user.accessToken}` };
  }
  return {};
};

const getUserBoard = () => {
  return fetch(API_URL + "user", { headers: getAuthHeader() })
    .then(res => res.json());
};

const getModeratorBoard = () => {
  return fetch(API_URL + "mod", { headers: getAuthHeader() })
    .then(res => res.json());
};

const getAdminBoard = () => {
  return fetch(API_URL + "admin", { headers: getAuthHeader() })
    .then(res => res.json());
};

export default {
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
