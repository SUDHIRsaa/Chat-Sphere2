import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE==="development" ?"http://localhost:5002/api":"/api",
  withCredentials: true,
});
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios Error:", error);  // Log the error for debugging
    return Promise.reject(error); // Pass the error for further handling
  }
);