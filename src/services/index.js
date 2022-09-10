import api from "./api";

export const getCep = async (cep) => {
  const response = await api.get(`${cep}/json`);
  return response;
};
