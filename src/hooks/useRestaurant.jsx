import useAxiosPublic from "@/api/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useRestaurant = () => {
  const { data: restaurantData, isLoading } = useQuery({
    queryKey: ["restaurant"],
    queryFn: async () => {
      const res = await useAxiosPublic.get("");
      return res.data;
    },
  });
  return [restaurantData, isLoading];
};

export default useRestaurant;

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
