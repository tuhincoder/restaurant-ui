import HeroVideoSection from "../components/HeroVideoSection";
import MenuPreviewSection from "../components/MenuPreviewSection";
import Reservation from "./Reservation";

import LuxuryCeoSection from "./LuxuryCeoSection";
import ContactUs from "./ContactUs";
import useRestaurant from "@/hooks/useRestaurant";
import useDishes from "@/hooks/useDishes";
import Loading from "@/components/loader/Loading";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Home | Restaurant</title>
        <meta name="description" content="Fine dining experience" />
      </Helmet>
      <HeroVideoSection restaurantData={restaurantData} />
      <MenuPreviewSection />
      <Reservation />
      <LuxuryCeoSection />
      <ContactUs />
    </>
  );
}
