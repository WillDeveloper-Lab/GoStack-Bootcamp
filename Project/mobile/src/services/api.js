import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',//10.0.3.2
});
export default api;