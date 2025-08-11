import axios from "axios";
// hello
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5002/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios Error:", error);
    return Promise.reject(error);
  }
);
