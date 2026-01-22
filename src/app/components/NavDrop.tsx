"use client"
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCaretDown } from "react-icons/fa";


function NavDrop() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-1 items-center">
        <span>Who We Are</span>
        <FaCaretDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-10 mt-5 border-none rounded-t-none font-sans text-base font-semibold capitalize">
        <DropdownMenuItem>About Bits</DropdownMenuItem>
        <DropdownMenuItem>Bits Team</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavDrop