// import useAxiosPublic from "@/api/axios";

// import axios from "@/api/axios";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

// export const useRestaurant = () => {
//   return useQuery({
//     queryKey: ["restaurant"],
//     queryFn: async () => {
//       const { data } = await axios.get("/public/restaurant.json");
//       return data;
//     },
//     staleTime: 1000 * 60 * 10, // 10 min
//     cacheTime: 1000 * 60 * 30, // 30 min
//     retry: 1,
//   });
// };

// const useRestaurant = () => {
//   const {
//     data: restaurant = [],
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["restaurant"],
//     queryFn: async () => {
//       const res = await axios.get("/public/restaurant.json");
//       console.log(res.data);
//       return res.data;
//     },
//     staleTime: 1000 * 60 * 10, // 10 min
//     cacheTime: 1000 * 60 * 30, // 30 min
//     retry: 1,
//   });
//   return [restaurant, isLoading, isError];
// };

// export default useRestaurant;
