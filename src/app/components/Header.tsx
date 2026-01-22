import React from 'react'
import Link from 'next/link';
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import Image from 'next/image';
import { ModeToggle } from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import MainNav from './MainNav';

function Header() {
  return (
    <header className="">
      <div className="container mx-auto bg-white min-h-[50px] pl-[126px] py-[13px] pr-[24px] relative flex justify-end gap-8">
        <div className="absolute w-[90px] h-[100px] bg-[#ffffff] rounded-br-[8px] top-0 left-0 px-2.5 py-1.5">
          <Image
            src="/images/highreslogo.png"
            alt="NairoBits Trust Logo"
            className='dark:grayscale'
            width={312}
            height={387}
          />
        </div>
        <div className="grow flex justify-between">
          <ul className="flex gap-11 justify-start items-center text-sm font-sans font-semibold">
            <li>
              <Link
                href="tel:+254720040975"
                className="flex gap-3 items-center"
              >
                <FaPhoneVolume
                  title="NairoBits Trust mail link icon"
                  className="inline-block text-blue w-4 h-4 dark:text-[#F7A31A]"
                />
                <span className="text-black inline-block hover:text-blue dark:hover:text-[#F7A31A]">
                  +254 720 040 975
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="mailto:info@nairobits.com"
                className="flex gap-3 items-center"
              >
                <FaEnvelope
                  title="NairoBits Trust mail link icon"
                  className="inline-block text-blue w-4 h-4 dark:text-[#F7A31A]"
                />
                <span className="text-black inline-block hover:text-blue dark:hover:text-[#F7A31A]">
                  info@nairobits.com
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex justify-end gap-8">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="bg-blue dark:bg-blue">
        <MainNav />
      </div>
    </header>
  );
}

export default Header