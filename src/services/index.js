import api from "./api";

export const getCep = async (cep) => {
  const { data } = await api.get(`${cep}/json/`);
  return data;
};
