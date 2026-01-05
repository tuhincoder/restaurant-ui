import HeroVideoSection from "../components/HeroVideoSection";
import MenuPreviewSection from "../components/MenuPreviewSection";
import Reservation from "./Reservation";

import LuxuryCeoSection from "./LuxuryCeoSection";
import ContactUs from "./ContactUs";
import useRestaurant from "@/hooks/useRestaurant";
import useDishes from "@/hooks/useDishes";
import Loading from "@/components/loader/Loading";

export default function Home() {
  // const { data: restaurantData = [], isLoading } = useQuery({
  //   queryKey: ["restaurant"],
  //   queryFn: async () => {
  //     const res = await axios.get("/public/restaurant.json");
  //     return res.data;
  //   },
  // });
  const [restaurantData, isLoading] = useRestaurant();
  const [dishesData] = useDishes();
  console.log(dishesData);

  if (isLoading) return <Loading />;

  return (
    <>
      <HeroVideoSection restaurantData={restaurantData} />
      <MenuPreviewSection />
      <Reservation />
      <LuxuryCeoSection />
      <ContactUs />
    </>
  );
}
