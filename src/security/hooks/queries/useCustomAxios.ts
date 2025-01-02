import axios, { AxiosInstance } from 'axios';

export const useCustomAxios = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_GOOGLE_API_URI,
  });

  return axiosInstance;
};