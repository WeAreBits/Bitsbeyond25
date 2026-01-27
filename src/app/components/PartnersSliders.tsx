import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
function PartnersSliders() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {partners.map((partner) => (
          <CarouselItem
            key={partner.id}
            className="h-[110px] basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 flex justify-center"
          >
            <Image
              src={`/images/${partner.shortname}.svg`}
              alt={partner.name}
              width={149}
              height={107}
              priority
              className="dark:grayscale-100 inline-block rounded border-2 border-gray"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default PartnersSliders