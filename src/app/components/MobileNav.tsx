import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { IoMenu, IoClose } from "react-icons/io5";
import Link from 'next/link';
import TopContacts from './TopContacts';
import CTAButtons from './CTAButtons';
import { HeaderProps, NavItem } from '@/types';

function MobileNav({ navs }: HeaderProps) {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="ml-3 block lg:hidden">
        <IoMenu className="w-9 h-9 cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent className="bg-white max-sm:min-w-full border-none m-0">
        <DrawerHeader className="grid grid-cols-6 items-center bg-blue shadow">
          <DrawerClose asChild>
            <IoClose className="w-9 h-9 cursor-pointer text-white" />
          </DrawerClose>
          <div className="col-span-5">
            <CTAButtons closeDrawer={true} />
          </div>
        </DrawerHeader>
        <nav className="grid grid-cols-2 gap-4 p-6">
          {navs.map((nav: NavItem) => (
            <div key={nav.id} className="flex flex-col">
              {nav.children && nav.children.length > 0 ? (
                <>
                  <h3 className="font-bold text-base mb-2 text-blue dark:text-blue">
                    {nav.label ?? "Menu"}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {nav.children.map((child) => (
                      <li key={child.id}>
                        <DrawerClose asChild>
                          <Link
                            href={
                              child.label === "Home" ? "/" : child.uri || "/"
                            }
                            className="font-sans text-base font-semibold capitalize"
                          >
                            {child.label ?? "Untitled"}
                          </Link>
                        </DrawerClose>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <DrawerClose asChild>
                  <Link
                    href={nav.label === "Home" ? "/" : nav.uri || "/"}
                    className="font-bold text-base text-gray-800 hover:text-orange"
                  >
                    {nav.label ?? "Untitled"}
                  </Link>
                </DrawerClose>
              )}
            </div>
          ))}
        </nav>
        <DrawerFooter className="shadow bg-white border-t-2 border-blue">
          <TopContacts />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default MobileNav