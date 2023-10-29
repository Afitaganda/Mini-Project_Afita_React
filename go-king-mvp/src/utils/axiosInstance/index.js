import axios from "axios";
import { API_URL } from "../../data/config";

export const AXIOS = axios.create({
    baseURL: API_URL,
});


export const useAxiosGet = (endpoint, config) =>
  AXIOS.get(endpoint, config);

export const useAxiosGetId = (
  endpoint,
  id,
  config
) => AXIOS.get(`${endpoint}/${id}`, config);

export const useAxiosPost = (
  endpoint,
  data,
  config
) => AXIOS.post(endpoint, data, config);

export const useAxiosPut = (
  endpoint,
  id,
  data,
  config
) => AXIOS.put(`${endpoint}/${id}`, data, config);

export const useAxiosDelete = (
  endpoint,
  id,
  config
) => AXIOS.delete(`${endpoint}/${id}`, config);