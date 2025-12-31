// import { useRestaurant } from "../hooks/useRestaurant";
// import useRestaurant from "@/hooks/useRestaurant";
import HeroVideoSection from "../components/HeroVideoSection";
import MenuPreviewSection from "../components/MenuPreviewSection";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Reservation from "./Reservation";

import LuxuryCeoSection from "./LuxuryCeoSection";

export default function Home() {
  // const [data, isLoading] = useRestaurant();
  const { data: restaurantData = [], isLoading } = useQuery({
    queryKey: ["restaurant"],
    queryFn: async () => {
      const res = await axios.get("/public/restaurant.json");
      return res.data;
    },
  });
  // console.log(restaurantData?.[0].menu?.[0].price);
  if (isLoading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <HeroVideoSection restaurantData={restaurantData} />
      <MenuPreviewSection menu={restaurantData?.[0].menu} />
      <Reservation />
      <LuxuryCeoSection />
    </>
  );
}
