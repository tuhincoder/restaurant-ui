import useAxiosPublic from "@/api/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  const { data: menu = [], isLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      console.log(res.data);
      return res.data;
    },
    // staleTime: 1000 * 60 * 10, // 10 min
    // cacheTime: 1000 * 60 * 30, // 30 min
    // retry: 1,
  });
  return [menu, isLoading];
};

export default useMenu;
