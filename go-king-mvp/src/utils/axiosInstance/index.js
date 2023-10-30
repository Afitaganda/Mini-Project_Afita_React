import axios from "axios";
import { API_URL } from "../../data/config";

export const AXIOS = axios.create({
  baseURL: API_URL,
});


export const axiosGet = (endpoint) =>
  AXIOS.get(endpoint);

export const axiosGetId = (
  endpoint,
  id,
) => AXIOS.get(`${endpoint}/${id}`);

export const axiosPost = (
  endpoint,
  data,
) => AXIOS.post(endpoint, data);

export const axiosPut = (
  endpoint,
  id,
  data,
) => AXIOS.put(`${endpoint}/${id}`, data);

export const axiosDelete = (
  endpoint,
  id,
) => AXIOS.delete(`${endpoint}/${id}`);