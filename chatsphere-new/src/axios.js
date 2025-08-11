import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_URL?.replace(/\/+$/, "") ||
  (process.env.NODE_ENV === "production"
    ? "https://chat-sphere2-2.onrender.com/api"
    : "http://localhost:5002/api");

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios Error:", error);
    return Promise.reject(error);
  }
);
