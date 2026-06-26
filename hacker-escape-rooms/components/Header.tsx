"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Play online", "/"],
    ["Play on-site", "/"],
    ["The story", "/"],
    ["Contact us", "/contact"],
  ];

  return (
    <>
      <header className="relative w-full overflow-hidden bg-[#011827] text-white border-b border-cyan-400/10">
        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 opacity-80" />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-20 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-[100px]" />
          <div className="absolute right-20 top-0 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto flex max-w-7xl items-center px-6 py-6">
          <Link
            href="/"
            className="group flex flex-1 items-center gap-2 min-w-0"
          >
            <Image
              src="/ESC-logo.png"
              alt="ESC Logo"
              width={120}
              height={100}
              priority
              className="w-[90px] transition-all duration-500 "
            />

            <h1 className="hidden text-lg font-light tracking-[0.15em] text-white transition-all duration-300 group-hover:text-cyan-300 md:block">
              Hacker <br /> Escape <br /> Rooms
            </h1>
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="group ml-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,.45)] lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-6 rounded bg-cyan-300 transition-all duration-300 group-hover:w-7" />
              <span className="h-0.5 w-6 rounded bg-cyan-300" />
              <span className="h-0.5 w-6 rounded bg-cyan-300 transition-all duration-300 group-hover:w-5" />
            </div>
          </button>

          <nav className="ml-auto hidden items-center gap-10 lg:flex">
            {links.map(([text, href]) => (
              <Link
                key={text}
                href={href}
                className="group relative uppercase tracking-[0.18em] text-white/70 transition-all duration-300 hover:text-cyan-300"
              >
                <span className="relative text-sm z-10">{text}</span>

                <span className="absolute inset-0 opacity-0 blur-md text-cyan-300 transition duration-300 group-hover:opacity-100">
                  {text}
                </span>

                <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#020617]/95 backdrop-blur-xl">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
            <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[120px]" />
          </div>

          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,.5)]"
          >
            <X className="h-8 w-8 text-cyan-300" strokeWidth={2.5} />
          </button>

          <nav className="relative flex flex-col gap-8 text-center">
            {links.map(([text, href]) => (
              <Link
                key={text}
                href={href}
                onClick={() => setOpen(false)}
                className="group relative text-4xl font-black uppercase tracking-[0.2em] text-white/80 transition-all duration-300 hover:scale-110 hover:text-cyan-300 md:text-6xl"
              >
                <span className="relative z-10">{text}</span>

                <span className="absolute inset-0 opacity-0 blur-xl text-cyan-400 transition duration-300 group-hover:opacity-100">
                  {text}
                </span>

                <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
