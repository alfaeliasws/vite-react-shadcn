import axios from "axios";
const API_KEY =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_API_URL
    : process.env.REACT_APP_PROD_API_URL;

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

async function reFetchToken(response) {
  const responseT = await axios({
    method: "post",
    url: API_KEY + "auth/verifyBooth",
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
  config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  return config;
});
instance.interceptors.response.use(async function (response) {
  if (
    response.data.status === 401 ||
    response.status !== 200 ||
    typeof response === "undefined"
  ) {
    const ress = await reFetchToken(response);

    return ress;
  } else {
    return response;
  }
});
export default instance;
