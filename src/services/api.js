import axios from "axios";

//exporta a conexão com o back-end api
export const api = axios.create({
  baseURL: "https://api-foodexplorer-cqb6.onrender.com/"
});
//https://api-foodexplorer-cqb6.onrender.com/
//http://localhost:3333/