import AboutDoctor from "@/components/Home/AboutDoctor";
import HeroBanner from "@/components/Home/HeroBanner";
import Stats from "@/components/Home/Stats";
import Treatments from "@/components/Home/Treatments";
import { getHomeData, getServicesData } from "@/sanity/fetchedData";

export default async function Home() {
  const homeData = await getHomeData();
  const servicesData = await getServicesData();
  return (
    <>
      <HeroBanner homeData={homeData} />
      <Treatments servicesData={servicesData} />
      <AboutDoctor homeData={homeData}/>
      <Stats/>
    </>
  );
}
