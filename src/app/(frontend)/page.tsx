import Image from "next/image";
import HomeHero from "../components/HomeHero";
import HomePartners from "../components/HomePartners";
import Impact from "../components/Impact";
import TestimonalsSlider from "../components/TestimonalsSlider";
import FeaturedNews from "../components/FeaturedNews";

export default function Home() {
  return (
    <main className="">
      <HomeHero/>
      <section className="myCont">
        <HomePartners/>
        <Impact/>
        <TestimonalsSlider/>
        <FeaturedNews/>
      </section>
    </main>
  );
}
