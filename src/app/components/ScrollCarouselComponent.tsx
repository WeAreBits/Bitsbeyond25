'use client'
import React from 'react'
import ScrollCarousel from "scroll-carousel-react";
import Image from 'next/image';

  const partners = [
    {
      id: 1,
      name: "Amref Kenya",
      shortname: "amref",
    },
    {
      id: 2,
      name: "Automation Anywhere",
      shortname: "automation",
    },
    {
      id: 3,
      name: "British Council",
      shortname: "bc",
    },
    {
      id: 4,
      name: "Christian Aid",
      shortname: "christianaid",
    },
    {
      id: 5,
      name: "Lenovo",
      shortname: "lenovo",
    },
    {
      id: 6,
      name: "London School of Economic",
      shortname: "lse",
    },
    {
      id: 7,
      name: "Malala Foundation",
      shortname: "malala",
    },
    {
      id: 8,
      name: "Microsoft",
      shortname: "microsoft",
    },
    {
      id: 9,
      name: "Rutgers",
      shortname: "rutgers",
    },
    {
      id: 10,
      name: "Team4Tech",
      shortname: "team4tech",
    },
  ];
function ScrollCarouselComponent() {
  return (
    <ScrollCarousel autoplay autoplaySpeed={1} speed={1} margin={50}>
      {partners.map((partner) => (
        <figure
          key={partner.id}
          className="w-[149px] h-[107px] rounded ring-2 ring-gray"
        >
          <Image
            src={`/images/${partner.shortname}.svg`}
            alt={partner.name}
            fill
            priority
            className="dark:grayscale-100 inline-block"
          />
        </figure>
      ))}
    </ScrollCarousel>
  );
}

export default ScrollCarouselComponent