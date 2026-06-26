"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#011827] text-white px-6 py-7">

        <div className="flex items-center md:gap-3">

<Link href="/" className="flex items-center md:gap-3 cursor-pointer">
  <Image
    src="/ESC-logo.png"
    alt="ESC Logo"
    width={110}
    height={80}
    priority
    className="h-auto w-[90px] md:w-[130px]"
  />

  <h1 className="text-lg md:text-4xl font-normal leading-[1.15] tracking-wide px-2">
    Hacker Escape Rooms
  </h1>
</Link>

          <button
            onClick={() => setOpen(true)}
            className="ml-auto md:hidden flex flex-col gap-2 group"
          >
            <span className="h-[3px] w-7 bg-[#5f6f7a] rounded transition-all duration-200 group-hover:bg-[#74bcd6]"></span>
            <span className="h-[3px] w-7 bg-[#8ACFE5] rounded transition-all duration-200 group-hover:bg-[#a6dcf0]"></span>
            <span className="h-[3px] w-7 bg-[#cfefff] rounded transition-all duration-200 group-hover:bg-white"></span>
          </button>

        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex w-full justify-center gap-16 mt-6">

          <Link className="hover:text-[#8ACFE5] transition" href="/">
            Play online
          </Link>

          <Link className="hover:text-[#8ACFE5] transition" href="/">
            Play on-site
          </Link>

          <Link className="hover:text-[#8ACFE5] transition" href="/">
            The story
          </Link>

          <Link className="hover:text-[#8ACFE5] transition" href="/contact">
            Contact us
          </Link>

        </nav>

      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#011827] flex flex-col items-center justify-center gap-10 text-white text-2xl">

          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-4xl"
          >
            ×
          </button>

          <Link onClick={() => setOpen(false)} href="/">
            Play online
          </Link>

          <Link onClick={() => setOpen(false)} href="/">
            Play on-site
          </Link>

          <Link onClick={() => setOpen(false)} href="/">
            The story
          </Link>

          <Link onClick={() => setOpen(false)} href="/contact">
            Contact
          </Link>

        </div>
      )}
    </>
  );
}