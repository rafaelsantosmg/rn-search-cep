import axios from "axios";

const BASE_URL = "https://viacep.com.br/ws/";

const api = axios.create({ baseURL: BASE_URL });

export default api;
