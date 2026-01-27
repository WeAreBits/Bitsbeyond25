'use client'
import React from 'react'
import dynamic from "next/dynamic";

const ScrollCarousel = dynamic(
  () => import("./ScrollCarouselComponent"),
  { ssr: true },
);

function HomePartners() {
  return (
    <section className="bg-white dark:bg-white contPadd py-10 h-[190px]">
      <ScrollCarousel/>
    </section>
  );
}

export default HomePartners