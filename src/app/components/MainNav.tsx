"use client";
import React from "react";
import Link from "next/link";
import NavDrop from "./NavDrop";
import CTAButtons from "./CTAButtons";
function MainNav() {
  return (
    <div className="container  mx-auto hidden lg:block">
      <nav className="ml-[126px] flex items-center">
        <ul className="flex grow min-h-[70px] justify-start items-stretch gap-5 font-sans font-bold text-sm text-white dark:text-white [&_li]:hover:text-orange">
          <li className="flex items-center">
            <Link href="/" title="Home Link">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <NavDrop />
          </li>

          <li className="flex items-center">
            <NavDrop />
          </li>

          <li className="flex items-center">
            <NavDrop />
          </li>

          <li className="flex items-center">
            <NavDrop />
          </li>

          <li className="flex items-center">
            <NavDrop />
          </li>
        </ul>
        <CTAButtons />
      </nav>
    </div>
  );
}

export default MainNav;
