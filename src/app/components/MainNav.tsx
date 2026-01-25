"use client";
import React from "react";
import Link from "next/link";
import NavDrop from "./NavDrop";
import CTAButtons from "./CTAButtons";
function MainNav() {
  return (
    <div className="container  mx-auto hidden lg:block">
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
        <CTAButtons />
      </nav>
    </div>
  );
}

export default MainNav;
