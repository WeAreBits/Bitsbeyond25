import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function TestimonalsSlider() {
  return (
    <section className="min-h-[250px] bg-white dark:bg-white contPadd py-11 overflow-hidden">
      <h2 className="bodyH2 mb-5">Testimonials</h2>
      <Carousel opts={{ align: "start", loop: true }} className="">
        <CarouselContent className="-mr-60 md:-mr-40 flex items-stretch">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((test: any, index: number) => (
            <CarouselItem
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-2 md:pl-4"
              key={index}
            >
              <Card className="pt-[20px] bg-accent dark:bg-accent border-0 flex flex-col justify-between h-full rounded">
                <CardContent>
                  <div className="text-base font-sans grow">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta vero, iste illo voluptate odit beatae!
                  </div>
                </CardContent>
                <CardFooter className="flex flex-row gap-5">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" className='dark:grayscale-100'/>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h5 className="font-sans font-bold text-base text-blue dark:text-blue">
                      Mariam Zaitun
                    </h5>
                    <h6 className="font-sans font-semibold text-xs text-black dark:text-black">
                      Senior Designer - NairoBits
                    </h6>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-accent hover:bg-blue text-blue hover:text-white invisible sm:visible sm:ml-8 md:ml-5" />
        <CarouselNext className="bg-accent text-blue hover:bg-blue hover:text-white invisible sm:visible sm:mr-8 md:mr-5" />
      </Carousel>
    </section>
  );
}

export default TestimonalsSlider