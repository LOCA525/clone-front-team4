import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 인터셉터 리스폰스 토큰 담기
instance.interceptors.response.use(
  (response) => {
    if (response.headers.accesstoken && response.headers.authorization) {
      localStorage.setItem("accessToken", response.headers.accesstoken);
      localStorage.setItem("refreshToken", response.headers.authorization);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 인터셉터 리퀘스트 토큰 헤더에싣기
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken) {
      config.headers["accesstoken"] = accessToken;
    }
    if (refreshToken) {
      config.headers["authorization"] = refreshToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
