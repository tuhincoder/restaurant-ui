import HeroVideoSection from "../components/HeroVideoSection";
import MenuPreviewSection from "../components/MenuPreviewSection";
import Reservation from "./Reservation";

import LuxuryCeoSection from "./LuxuryCeoSection";
import ContactUs from "./ContactUs";
import useRestaurant from "@/hooks/useRestaurant";

export default function Home() {
  // const [data, isLoading] = useRestaurant();
  // const { data: restaurantData = [], isLoading } = useQuery({
  //   queryKey: ["restaurant"],
  //   queryFn: async () => {
  //     const res = await axios.get("/public/restaurant.json");
  //     return res.data;
  //   },
  // });
  const [restaurantData, isLoading] = useRestaurant();

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
      <MenuPreviewSection menu={restaurantData?.[0].dishes} />
      <Reservation />
      <LuxuryCeoSection />
      <ContactUs />
    </>
  );
}
