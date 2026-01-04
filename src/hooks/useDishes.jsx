import useAxiosPublic from "@/api/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useDishes = () => {
  const { data: dishesData = [], isLoading } = useQuery({
    queryKey: ["dishesData"],
    queryFn: async () => {
      const res = await useAxiosPublic.get("/public/deshes.json");
      return res.data;
    },
  });
  return [dishesData, isLoading``];
};

export default useDishes;
