"use client"
import React, {useState, useEffect} from 'react'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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


function Slider() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, i) =>
            i === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-2"
              >
                {/* Left Side: Content */}
                <div className="order-2 lg:order-1 space-y-5">
                  {/* <span className="inline-block px-6 py-2 mb-10 text-center bg-blue dark:bg-blue text-white dark:text-white font-sans font-xs rounded-full">
                    {slide.slogan}
                  </span> */}
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

                {/* Right Side: Image */}
                <figure className="order-1 lg:order-2 relative h-[260px] lg:h-[460px]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority
                    className="object-fit dark:grayscale-100"
                  />
                </figure>
              </motion.div>
            ),
        )}
      </AnimatePresence>
      {/* Navigation Dots */}
      <div className="hidden absolute bottom-8 left-1/2 lg:flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 transition-all rounded-full ${
              current === index
                ? "w-8 bg-blue dark:bg-[#F7A31A]"
                : "w-2 bg-black dark:bg-black"
            }`}
          />
        ))}
      </div>
    </>
  );
}

export default Slider