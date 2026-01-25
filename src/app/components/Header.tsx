import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import TopContacts from './TopContacts';

function Header() {
  return (
    <header className="sticky max-lg:bg-white bg-gray dark:bg-gray top-0 w-full z-50">
      <div className="myCont max-lg:h-[70px] mx-auto bg-white dark:bg-white lg:min-h-[50px] pl-[60px] lg:pl-32 py-[13px] sm:pr-6 relative flex justify-end gap-8">
        <div className="absolute w-[70px] h-[80px] p-3 md:w-[90px] md:h-[100px] bg-[#ffffff] rounded-br-[8px] top-0 left-0 md:px-2.5 md:py-1.5">
          <Image
            src="/images/highreslogo.png"
            alt="NairoBits Trust Logo"
            className="dark:grayscale"
            width={312}
            height={387}
          />
        </div>
        <div className="grow flex justify-end lg:justify-between items-center">
          <div className="hidden lg:block">
            <TopContacts />
          </div>
          <div className="flex justify-end gap-4 md:gap-8">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
          <MobileNav />
        </div>
      </div>
      <div className="bg-blue dark:bg-blue">
        <MainNav />
      </div>
    </header>
  );
}

export default Header