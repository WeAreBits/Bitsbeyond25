"use client";

import Script from "next/script";

const INCLUDED_LANGUAGES = "en,fr,ar,ja,zh-CN,zh-TW";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            layout?: unknown;
          },
          element: string
        ) => void;
      };
    };
  }
}

export function GoogleTranslateScript() {
  return (
    <>
      <div id="google_translate_element" className="hidden" aria-hidden="true" />
      <Script id="google-translate-init" strategy="beforeInteractive">
        {`window.googleTranslateElementInit=function(){if(window.google?.translate?.TranslateElement){new window.google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'${INCLUDED_LANGUAGES}',layout:window.google.translate.TranslateElement.InlineLayout.SIMPLE},'google_translate_element')}}`}
      </Script>
      <Script
        id="google-translate-script"
        strategy="afterInteractive"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />
    </>
  );
}
