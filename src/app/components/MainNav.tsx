"use client";
import React from "react";
import Link from "next/link";
import NavDrop from "./NavDrop";
function MainNav() {
  return (
    <div className="container mx-auto hidden lg:block">
      <nav className="ml-[126px] min-h-[70px] flex items-center">
        <ul className="flex grow justify-start items-center gap-5 font-sans font-bold text-sm text-white dark:text-white [&_li]:hover:text-orange">
          <li>
            <Link href="/" title="Home Link">
              Home
            </Link>
          </li>
          <li>
            <NavDrop />
          </li>

          <li>
            <NavDrop />
          </li>
        </ul>
        <ul className="flex justify-end items-center gap-5 mr-6 [&_li]:font-sans [&_li]:font-semibold [&_li]:text-base [&_li]:capitalize [&_li]:rounded-[8px] [&_li]:px-4 [&_li]:py-2 [&_li]:first:bg-white [&_li]:first:hover:bg-orange [&_li]:last:bg-orange [&_li]:last:hover:bg-white dark:[&_li]:last:bg-orange dark:[&_li]:hover:text-[#F7A31A]">
          <li>
            <Link href="/" title="NairoBits Donate Button">
              Donate Now
            </Link>
          </li>
          <li>
            <Link href="/" title="NairoBits Apply Button">
              Apply Now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;
