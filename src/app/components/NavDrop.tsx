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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-1 items-center">
        <span>Who We Are</span>
        <FaCaretDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-10 mt-6 border-none bg-white dark:bg-white rounded-t-none rounded-b font-sans text-base font-semibold capitalize">
        <DropdownMenuItem>
          <Link href="/about-bits">About Bits</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/bits-team">Bits Team</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavDrop