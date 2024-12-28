import axios from "axios";

//exporta a conexão com o back-end api
export const api = axios.create({
  baseURL: "http://localhost:3333/"
});
//https://api-foodexplorer-zicc.onrender.com/
