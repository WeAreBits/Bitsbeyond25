import PagesHero from '@/app/components/PagesHero'
import React from 'react'


function page() {
  return (
    <article>
    <PagesHero/>
    <section>
      <div className="myCont bg-accent">
        <div className="contPadd py-11">
          <h2 className='bodyH2'>About Bits</h2>
        </div>
      </div>
      <div className="myCont bg-blue">
        <div className="contPadd py-11"></div>
      </div>
    </section>
    </article>
  )
}

export default page