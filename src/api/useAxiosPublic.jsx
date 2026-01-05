import axios from "axios";

const instance = axios.create({
  baseURL: "https://restaurant-server-delta-lyart.vercel.app",
  // timeout: 1000,
});

const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;
