"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <body
        className={`${inter.className} ${
          isDarkMode ? "bg-[#1D1E42] text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleTheme}
            className="p-2  text-white dark:bg-transparent dark:text-black"
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1M12 20v1M3 12h1M20 12h1M4.22 4.22l.707.707M18.364 18.364l.707.707M4.22 19.778l.707-.707M18.364 5.636l.707-.707M12 5a7 7 0 000 14 7 7 0 000-14z"
                />
              </svg>
            ) : (
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M1599 4987 c-137 -57 -356 -193 -519 -323 -111 -89 -319 -296 -404
-404 -328 -413 -512 -886 -557 -1435 -34 -411 38 -832 207 -1208 289 -643 896
-1180 1599 -1415 150 -51 274 -71 498 -84 930 -53 1670 243 2192 877 184 224
395 575 395 658 0 98 -72 188 -166 207 -52 11 -62 10 -128 -15 -326 -123 -500
-166 -747 -185 -216 -16 -469 6 -680 60 -213 55 -451 160 -634 280 -139 92
-185 129 -313 254 -197 192 -317 353 -437 591 -284 559 -306 1191 -64 1791 45
113 51 134 47 185 -6 77 -40 128 -109 163 -65 32 -107 32 -180 3z m-299 -767
c-138 -817 82 -1564 632 -2146 342 -360 856 -660 1318 -768 179 -42 276 -50
580 -50 214 0 310 4 385 16 55 9 101 15 104 13 2 -2 -26 -37 -62 -78 -265
-296 -647 -528 -1033 -627 -180 -47 -283 -61 -484 -67 -819 -24 -1539 387
-1948 1113 -484 858 -294 1976 447 2636 42 37 76 66 77 65 1 -1 -7 -49 -16
-107z"
                  />
                </g>
              </svg>
            )}
          </button>
        </div>
        {children}
      </body>
    </html>
  );
}
