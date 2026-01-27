"use client"
import React from "react";
import SliderTwo from "./SliderTwo";

function HomeHero() {
  return (
    <section className="bg-accent dark:bg-accent">
      <div className="myCont">
        <div className="contPadd relative w-full overflow-hidden py-11">
          <SliderTwo/>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
