import axios from "axios";

const api = axios.create({
  baseURL: "http://07357ac3.ngrok.io"
  // baseURL: "http://localhost:3333"
})

export default api;