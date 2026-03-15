import Axios from "axios";
// import Cookies from "js-cookie";

const api = Axios.create({
  baseURL: `${import.meta.env.PUBLIC_API_URL}/api`,
});

api.interceptors.request.use(
  (config) => {
    // const token = Cookies.get("token");
    const token = "";
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response.status === 401 &&
      !error.config.url.includes("/auth/login")
    ) {
      // Cookies.remove("token");
      localStorage.removeItem("user");
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export { api };
