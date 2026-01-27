import PagesHero from '@/app/components/PagesHero'
import React from 'react'

function page() {
  return (
    <>
      <PagesHero />
      <main className="myCont">
        <section className="contPadd">
          <h1>Bits Cast Page</h1>
        </section>
      </main>
    </>
  );
}

export default page