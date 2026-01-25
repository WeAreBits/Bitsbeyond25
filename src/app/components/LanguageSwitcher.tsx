"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiMiniLanguage } from "react-icons/hi2";

const LANGUAGES = [
  { label: "English", href: "/", code: "en" },
  { label: "French", href: "/", code: "fr" },
];
function LanguageSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center justify-between gap-3 px-2 text-blue"
          aria-label="Toggle language menu"
        >
          <div className="flex items-center gap-3 cursor-pointer">
            <HiMiniLanguage className="inline-block h-6 w-6 md:h-5 font-bold md:w-5 text-blue dark:text-[#F7A31A]" />
            <span className="hidden md:block font-sans text-sm font-semibold text-black hover:text-blue hover:dark:text-[#F7A31A]">
              Choose Language
            </span>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="mt-2 border-0 bg-white font-sans rounded-t-none font-semibold text-black shadow-none"
      >
        {LANGUAGES.map(({ code, href, label }) => (
          <DropdownMenuItem key={code} asChild>
            <Link href={href} className="block w-full">
              {label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSwitcher;
