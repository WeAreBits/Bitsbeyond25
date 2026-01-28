"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Link
          href=""
          role="button"
          className="flex items-center justify-between md:gap-3 text-blue px-2"
        >
          <div className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 flex gap-3 items-center justify-start">
            <Sun className="w-6 h-6 md:w-5 md:h-5 text-blue dark:text-[#F7A31A]" />
            <span className="hidden md:inline-block text-black hover:text-blue font-sans font-semibold text-sm hover:dark:text-[#F7A31A]">
              Light Mode
            </span>
          </div>
          <div className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 flex gap-3 items-center justify-start">
            <Moon className="w-6 h-6 md:w-5 md:h-5 text-blue dark:text-[#F7A31A]" />
            <span className="hidden md:inline-block text-black hover:text-blue font-sans font-semibold text-sm hover:dark:text-[#F7A31A]">
              Dark Mode
            </span>
          </div>
          <span className="sr-only">Toggle theme</span>
        </Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-0 font-sans font-semibold text-black hover:text-blue md:right-0 shadow-none mt-2 rounded-t-none rounded-b-[4px] bg-white">
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light Mode
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark Mode
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
