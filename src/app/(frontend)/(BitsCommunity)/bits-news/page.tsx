import React from 'react'
import PagesHero from '@/app/components/PagesHero'
import FeaturedNews from '@/app/components/FeaturedNews';

function page() {
  return (
    <>
      <PagesHero />
      <main className="myCont">
        <FeaturedNews />
        <section className="bg-white dark:bg-white min-h-[500px] contPadd py-11">
          {}
        </section>
      </main>
    </>
  );
}

export default page