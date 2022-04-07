import axios, { AxiosInstance } from 'axios';

const api:AxiosInstance = axios.create({
  baseURL: 'https://sujeitoprogramador.com/'
});

export const getMovieListe = async (param:string) => {
  let list = await api.get(param);
  return list;
}