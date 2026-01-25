import React from 'react'
import Link from 'next/link'

function PagesHero() {
  return (
    <section className="bg-[url(/images/newsbg.png)] bg-no-repeat bg-cover bg-center">
      <div className="bg-blue/75">
        <div className="myCont">
          <div className="contPadd py-11 flex flex-col items-start [&_h1]:text-white [&_h1]:font-semibold [&_h1]:font-sans [&_h1]:text-4xl capitalize">
            <h1>About NairoBits</h1>
            <ul className="flex justify-start gap-1 mt-4 [&_li]:first:text-orange text-base font-semibold font-sans text-white">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>/</li>
              <li>About Bits</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PagesHero