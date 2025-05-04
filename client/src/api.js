import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fertilizer-store-backend.onrender.com/api'
});

export default api;
