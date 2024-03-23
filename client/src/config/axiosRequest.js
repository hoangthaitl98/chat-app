import axios from "axios";
import { BACKEND_URL } from "./configuration";

const axiosRequest = () => {
  let token = localStorage.getItem("token");
  const defaultOptions = {
    baseURL: BACKEND_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return {
    get: (url, options = {}) =>
      axios.get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) =>
      axios.post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) =>
      axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) =>
      axios.delete(url, { ...defaultOptions, ...options }),
  };
};

export default axiosRequest();
