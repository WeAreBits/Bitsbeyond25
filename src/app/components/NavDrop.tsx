"use client"
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCaretDown } from "react-icons/fa";
import Link from 'next/link';


function NavDrop() {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className="flex gap-1 items-center cursor-pointer"
        onMouseEnter={() => setOpen(true)}
      >
        <span>Who We Are</span>
        <FaCaretDown
          className={`transition-transform duration-200 ease-out ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="ml-10 mt-5 border-none bg-white dark:bg-white rounded-t-none rounded-b font-sans text-base font-semibold capitalize transition-all duration-200 ease-out data-[state=closed]:opacity-0 data-[state=open]:opacity-100 data-[state=closed]:translate-y-1 data-[state=open]:translate-y-0"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/about-bits">About Bits</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/bits-team">Bits Team</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavDrop