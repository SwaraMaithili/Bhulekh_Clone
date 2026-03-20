// frontend/src/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',  // ONLY /api here
});

export default instance;