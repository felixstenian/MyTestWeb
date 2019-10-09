import axios from "axios";

const api = axios.create({
  baseURL: "http://07357ac3.ngrok.io"
})

export default api;