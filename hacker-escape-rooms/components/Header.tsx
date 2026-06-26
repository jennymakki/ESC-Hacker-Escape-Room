"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex h-[88px] w-full items-center bg-[#011827] px-6 text-white">
         <Image
          src="/ESC-logo.png"
          alt="ESC Logo"
          width={110}
          height={80}
          priority
          className="h-auto w-[110px]"
        />
        <h1 className="ml-2 w-[70px] text-sm font-medium leading-6">
          Hacker Escape Rooms
        </h1>

        <nav className="ml-auto hidden gap-8 lg:flex font-medium">
          <a href="#">Play online</a>
          <a href="#">Play on-site</a>
          <a href="#">The story</a>
          <a href="#">Contact</a>
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="ml-auto flex flex-col gap-[4px] lg:hidden"
        >
          <span className="h-[2px] w-6 bg-white"></span>
          <span className="h-[2px] w-6 bg-white"></span>
          <span className="h-[2px] w-6 bg-white"></span>
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#011827]">

          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 text-4xl text-white"
          >
            ×
          </button>

          <nav className="flex flex-col items-center gap-10 text-2xl font-medium text-white">
            <a href="#">Play online</a>
            <a href="#">Play on-site</a>
            <a href="#">The story</a>
            <a href="#">Contact</a>
          </nav>

        </div>
      )}
    </>
  );
}