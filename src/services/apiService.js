/** @format */

import axios from "axios";

const apiService = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

apiService.interceptors.request.use(
  async (config) => {
    config.headers["Content-type"] = "application/json; charset=UTF-8";

    return config;
  },
  (error) => Promise.reject(error)
);

export default apiService;
