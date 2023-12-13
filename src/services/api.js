import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-3zw2.onrender.com/'
});