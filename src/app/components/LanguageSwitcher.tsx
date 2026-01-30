"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiMiniLanguage } from "react-icons/hi2";

const LANGUAGES = [
  { label: "English", code: "en" },
  { label: "French", code: "fr" },
  { label: "Arabic", code: "ar" },
  { label: "Japanese", code: "ja" },
  { label: "Chinese (Simplified)", code: "zh-CN" },
  { label: "Chinese (Traditional)", code: "zh-TW" },
] as const;

function setGoogleTranslateLanguage(code: string) {
  if (code === "en") {
    document.cookie =
      "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  } else {
    document.cookie = `googtrans=/en/${code}; path=/`;
  }
  window.location.reload();
}

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
        className="mt-2 border-0 bg-white font-sans rounded-t-none rounded-b-[4px] font-semibold text-black shadow-none"
      >
        {LANGUAGES.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            className="cursor-pointer"
            onSelect={(e) => {
              e.preventDefault();
              setGoogleTranslateLanguage(code);
            }}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSwitcher;
