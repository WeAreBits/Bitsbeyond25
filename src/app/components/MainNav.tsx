"use client";
import React from "react";
import Link from "next/link";
import NavDrop from "./NavDrop";
import CTAButtons from "./CTAButtons";
import { HeaderProps, NavItem } from "@/types";

function MainNav({ navs }: HeaderProps) {
  return (
    <div className="container  mx-auto hidden lg:block">
      <nav className="ml-[126px] flex items-center">
        <ul className="flex grow min-h-[70px] justify-start items-stretch gap-5 font-sans font-bold text-sm text-white dark:text-white [&_li]:hover:text-orange">
          {navs.map((nav: NavItem) => (
            <li key={nav.id} className="flex items-center">
              {nav.children && nav.children.length > 0 ? (
                <NavDrop nav={nav} />
              ) : (
                <Link
                  href={nav.label === "Home" ? "/" : nav.uri || "/"}
                  title={nav.label ?? undefined}
                >
                  {nav.label ?? "Untitled"}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <CTAButtons />
      </nav>
    </div>
  );
}

export default MainNav;
