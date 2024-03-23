import axiosRequest from "../config/axiosRequest";

export const login = (data) => {
  const url = "/v1/auth/login";
  return axiosRequest.post(url, data);
};

export const getMe = () => {
  const url = "/v1/auth/me";
  return axiosRequest.get(url);
};
