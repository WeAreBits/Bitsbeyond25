import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

const slides = [
   {
     id: 1,
     slogan: "I am a Bit You Are a Bit #WeAreBits",
     title: "EDUCATE",
     description:
       "Quality education is the single greatest pathway to awesome futures. We offer top notch alternative higher education to those who need it.",
     image: "/images/educate.svg",
     cta: "Learn More",
   },
   {
     id: 2,
     slogan: "I am a Bit You Are a Bit #WeAreBits",
     title: "INNOVATE",
     description:
       "We believe in using everyone’s creative genius to disrupt the status quo. We work with our community to create and build solutions for challenges around us.",
     image: "/images/innovate.svg",
     cta: "Learn More",
   },
   {
     id: 3,
     slogan: "I am a Bit You Are a Bit #WeAreBits",
     title: "TRANSFORM",
     description:
       "Everyone deserves a great future! We enable holistic transformation through impactful programs that create jobs, change lives and grow responsible citizens.",
     image: "/images/transform.svg",
     cta: "Learn More",
   },
];

function SliderTwo() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => setCurrent(api.selectedScrollSnap());

    api.on("select", handleSelect);
    handleSelect();

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <Carousel
      opts={{
        loop: true,
        duration: 60, // slow down transition movement
      }}
      plugins={[
        Autoplay({
          delay: 8000, // slower autoplay cadence
        }),
      ]}
      setApi={setApi}
    >
      <CarouselContent>
        {slides.map((slide, i) => (
          <CarouselItem
            key={i}
            className="w-full grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-2 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: current === i ? 1 : 0,
            }}
          >
            <div className="order-2 lg:order-1 space-y-5">
              <h1 className="text-4xl/tight font-semibold font-sans text-black dark:text-black">
                {slide.title}
              </h1>
              <p className="max-w-lg text-xl font-normal font-sans">
                {slide.description}
              </p>
              <div className="flex gap-4">
                <button className="rounded bg-black hover:bg-blue px-8 py-3 font-semibold font-sans text-xl text-white transition active:scale-95">
                  {slide.cta}
                </button>
              </div>
            </div>
            <figure className="order-1 lg:order-2 relative h-[260px] lg:h-[460px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover dark:grayscale-100"
              />
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex items-center justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`h-2.5 w-2.5 rounded-full transition ${
              current === index
                ? "w-8 bg-blue dark:bg-[#F7A31A]"
                : "w-2 bg-black dark:bg-black"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </Carousel>
  );
}

export default SliderTwo