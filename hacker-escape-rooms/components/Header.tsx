"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#011827] text-white px-6 py-7">
        <div className="flex items-center md:gap-3">
          <Image
            src="/ESC-logo.png"
            alt="ESC Logo"
            width={110}
            height={80}
            priority
            className="h-auto w-[90px] md:w-[130px]"
          />

          <h1
            className="
  text-lg font-normal leading-tight px-2
  md:text-xl md:font-normal
  whitespace-normal
  break-words
"
          >
            Hacker Escape Rooms
          </h1>

          <button
            onClick={() => setOpen(true)}
            className="ml-auto md:hidden flex flex-col gap-[4px]"
          >
            <span className="h-[2px] w-6 bg-white"></span>
            <span className="h-[2px] w-6 bg-white"></span>
            <span className="h-[2px] w-6 bg-white"></span>
          </button>
        </div>

        <nav
          className="
          hidden md:flex
          w-full justify-center
          gap-16 mt-6
        "
        >
          <a className="text-white text-lg" href="#">
            Play online
          </a>
          <a className="text-white text-lg" href="#">
            Play on-site
          </a>
          <a className="text-white text-lg" href="#">
            The story
          </a>
          <a className="text-white text-lg" href="#">
            Contact us
          </a>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#011827] flex flex-col items-center justify-center gap-10 text-white text-2xl">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-4xl"
          >
            ×
          </button>

          <a href="#">Play online</a>
          <a href="#">Play on-site</a>
          <a href="#">The story</a>
          <a href="#">Contact</a>
        </div>
      )}
    </>
  );
}
