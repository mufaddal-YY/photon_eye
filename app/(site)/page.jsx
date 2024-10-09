import AboutDoctor from "@/components/Home/AboutDoctor";
import Cta from "@/components/Home/Cta";
import HeroBanner from "@/components/Home/HeroBanner";
import Stats from "@/components/Home/Stats";
import Testimonials from "@/components/Home/Testimonials";
import Treatments from "@/components/Home/Treatments";
import {
  getHomeData,
  getServicesData,
  getTestimonialsData,
} from "@/sanity/fetchedData";

export default async function Home() {
  const homeData = await getHomeData();
  const servicesData = await getServicesData();
  const testimonialsData = await getTestimonialsData();
  return (
    <>
      <HeroBanner homeData={homeData} />
      <Treatments servicesData={servicesData} />
      <AboutDoctor homeData={homeData} />
      <Stats />
      <Testimonials data={testimonialsData} />
      <Cta />
    </>
  );
}
