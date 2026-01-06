import useAxiosPublic from "@/api/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useDishes = () => {
  const axiosPublic = useAxiosPublic();
  const { data: dishesData = [] } = useQuery({
    queryKey: ["dishesData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/dishes");
      return res.data;
    },
    // staleTime: 1000 * 60 * 10, // 10 min
    // cacheTime: 1000 * 60 * 30, // 30 min
    // retry: 1,
  });
  return [dishesData];
};

export default useDishes;
