import axios from "axios";

const api = axios.create({
  // baseURL: 'http://',
  baseURL: "http://localhost:3333"
});

export default api;
