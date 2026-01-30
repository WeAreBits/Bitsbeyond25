import PagesHero from "@/app/components/PagesHero";
import React from "react";

function page() {
  return (
    <>
      <PagesHero />
      <main className="myCont">
        <section className="contPadd py-11 bg-white">
          <h2 className="bodyH2 mb-5">Page Heading</h2>
        </section>
        <section className="contPadd py-11 bg-white"></section>
      </main>
    </>
  );
}

export default page;
