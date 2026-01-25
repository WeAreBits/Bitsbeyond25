import React from 'react'
import Link from 'next/link'

function CTAButtons() {
  return (
     <ul className="flex justify-end items-center gap-5 [&_li]:font-sans [&_li]:font-semibold [&_li]:text-base [&_li]:capitalize [&_li]:rounded-[8px] [&_li]:px-4 [&_li]:py-2 [&_li]:first:bg-white [&_li]:first:hover:bg-orange [&_li]:last:bg-orange [&_li]:last:hover:bg-white dark:[&_li]:last:bg-orange dark:[&_li]:hover:text-[#F7A31A]">
          <li>
            <Link href="/donate" title="NairoBits Donate Button">
              Donate Now
            </Link>
          </li>
          <li>
            <Link href="/apply" title="NairoBits Apply Button">
              Apply Now
            </Link>
          </li>
        </ul>
  )
}

export default CTAButtons