import axios from "axios";

const api = axios.create({
  baseURL: 'http://851b5fd6.ngrok.io',
  // baseURL: "http://localhost:3333"
})

export default api;