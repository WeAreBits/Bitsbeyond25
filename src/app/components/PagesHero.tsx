import React from 'react'
import Link from 'next/link'

function PagesHero() {
  return (
    <article className="bg-[url(/images/newsbg.png)] bg-no-repeat bg-cover bg-top">
      <section className="bg-blue/75">
        <header className="myCont">
          <nav className="contPadd py-11 flex flex-col items-start [&_h1]:text-white [&_h1]:font-semibold [&_h1]:font-sans [&_h1]:text-4xl capitalize">
            <h1>About NairoBits</h1>
            <ul className="flex justify-start gap-1 mt-4 [&_li]:first:text-orange text-base font-semibold font-sans text-white">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>/</li>
              <li>About Bits</li>
            </ul>
          </nav>
        </header>
      </section>
    </article>
  );
}

export default PagesHero