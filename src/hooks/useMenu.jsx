import useAxiosPublic from "@/api/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const { data: menu = [], isLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await useAxiosPublic.get("");
      return res.data;
    },
  });
  return [menu, isLoading];
};

export default useMenu;
