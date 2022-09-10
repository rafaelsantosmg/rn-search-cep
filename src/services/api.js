import axios from "axios";

const baseURL = "https://viacep.com.br/ws/";

const api = axios.create({ baseURL });

export default api;
