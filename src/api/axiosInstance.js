import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const axiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    timeout:5000,
})

axiosInstance.interceptors.request.use(
    (config)=>{
        config.params={
            ...config.params,
            api_key:API_KEY
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)
axiosInstance.interceptors.response.use(

  (response) => {
    console.log("Response received");
    return response;
  },

  (error) => {

    if (error.response) {

      const status = error.response.status;

      switch (status) {

        case 401:
          console.log("Unauthorized Access");
          break;

        case 404:
          console.log("API Not Found");
          break;

        case 500:
          console.log("Server Error");
          break;

        default:
          console.log("Something went wrong");
      }

    } 
    
    else if (error.request) {
      console.log("No response from server");
    } 
    
    else {
      console.log("Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;