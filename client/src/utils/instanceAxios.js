import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:4000",
});

// Add the token to request headers
axiosClient.defaults.headers.common[
    "Authorization"
] = `Bearer ${localStorage.getItem("token")}`;

export default axiosClient;
