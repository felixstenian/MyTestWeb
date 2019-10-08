import axios from "axios";

const api = axios.create({
  baseURL: "http://2c747a52.ngrok.io"
})

export default api;