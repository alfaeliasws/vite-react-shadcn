import axios from "axios";
const API_KEY = 
import.meta.env.MODE === "development"
    ? import.meta.env.VITE_REACT_APP_DEV_API_URL
    :import.meta.env.VITE_REACT_APP_PROD_API_URL;

const instance = axios.create({
  baseURL: API_KEY,
});

async function reFetch(originalRequest) {
  const response = await axios({
    method: originalRequest.method,
    url: API_KEY + originalRequest.url,
    headers: originalRequest.headers,
  });
  return response;
}
async function reFetchData(originalRequest) {
  const response = await axios({
    method: originalRequest.method,
    url: API_KEY + originalRequest.url,
    data: originalRequest.data,
    headers: originalRequest.headers,
  });
  return response;
}

async function reCreateToken(response) {
  const responseT = await axios({
    method: "post",
    url: API_KEY + "token/reCreate",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
  if (responseT.data.status === 200) {
    localStorage.removeItem("token");
    localStorage.setItem("token", responseT.data.token);
    const originalRequest = response.config;
    originalRequest.headers["Authorization"] = "Bearer " + responseT.data.token;
    if (typeof originalRequest.data === "undefined") {
      const response = await reFetch(originalRequest);
      return response;
    } else {
      const response = await reFetchData(originalRequest);
      return response;
    }
  }
}

async function reFetchToken(response) {
  const responseT = await axios({
    method: "post",
    url: API_KEY + "auth/verifyAccount",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
  if (responseT.data.status === 200) {
    localStorage.removeItem("token");
    localStorage.setItem("token", responseT.data.token);
    const originalRequest = response.config;
    originalRequest.headers["Authorization"] = "Bearer " + responseT.data.token;
    if (typeof originalRequest.data === "undefined") {
      const response = await reFetch(originalRequest);
      return response;
    } else {
      const response = await reFetchData(originalRequest);
      return response;
    }
  }
}

instance.defaults.timeout = 1000000;
instance.interceptors.request.use((config) => {
  config.headers = {};

  config.headers["x-booth-id"] = localStorage.getItem("x-booth-id") ?? "";
  config.headers["x-merchant-id"] = localStorage.getItem("x-merchant-id") ?? "";
  if (localStorage.getItem("token")) {
    config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  } else {
    config.headers["Authorization"] =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib290aERldGFpbCI6eyJib290aElEIjoxLCJtZXJjaGFudElEIjoxLCJicmFuZElEIjoxfSwiaWF0IjoxNjc3MjMzODY5LCJleHAiOjE3MDcyMzM4Njl9.BU0Ff9ad3aj7Akpt8uK1i1n-YmEsLyW-2qQ6ADHj3yU";
  }
  return config;
});
instance.interceptors.response.use(
  async function (response) {
    if (
      response.data.status === 401 || 
      (response.status !== 200 && response.status !== 500) ||
      typeof response === "undefined"
    ) {
      const ress = await reFetchToken(response);
      return ress;
    } else if(response.data.status === 403) {
      const ress = await reCreateToken(response)
      return ress;
    }else {
      return response;
    }
  },
  async function (error) {
    const errorLog = error;
    const originalRequest = error.config;

    if (errorLog.toString().includes("Network Error")) {
      const ress = { data: "Error 500" };
      return ress;
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      const ress = await reFetchToken(error);
      return ress;
    }

    if (error.response.status === 403) {
      const ress = await reCreateToken(error);
      return ress;
    }
  }
);
export default instance;
