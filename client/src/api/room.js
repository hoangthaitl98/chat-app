import axiosRequest from "../config/axiosRequest";

export const getRoomList = () => {
  const url = "/v1/room/";
  return axiosRequest.get(url);
};
