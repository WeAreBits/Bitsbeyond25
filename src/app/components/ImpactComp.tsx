import React from 'react'
import Image from 'next/image'

function ImpactComp() {
  return (
    <div className="min-h-[105px] min-w-[320px] rounded flex flex-row flex-start bg-white dark:bg-white">
      <figure className="bg-blue text-white dark:bg-blue dark:text-white p-6 w-[100px] h-[105px] rounded-l relative">
        <Image
          src={`/images/calendar.svg`}
          fill
          priority
          alt="calendar icon"
          className="max-w-[60%] inline-block mx-auto dark:brightness-0"
        />
      </figure>
      <div className="p-2.5 text-center flex flex-col items-center justify-center grow">
        <h2 className="text-blue dark:text-blue font-sans font-bold text-4xl">
          25
        </h2>
        <p className="text-black dark:text-blue font-sans font-semibold text-base">
          Years of Existence
        </p>
      </div>
    </div>
  );
}

export default ImpactComp