"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topnav">

        <button
          className="icon"
          onClick={() => setMenuOpen(true)}
        >
          <Image
            src="/hamburger.png"
            alt="Open menu"
            width={40}
            height={40}
          />
        </button>

        {menuOpen && (
          <div id="myLinks">

            <button
              className="closebtn"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/X.png"
                alt="Close menu"
                width={30}
                height={30}
              />
            </button>

            <a href="#">Play online</a>
            <a href="#">Play on-site</a>
            <a href="#">The story</a>
            <a href="#">Contact</a>

          </div>
        )}
      </div>

      <header className="header">

        <Image
          className="header__logo"
          src="/ESC-logo.png"
          alt="ESC Logo"
          width={120}
          height={120}
        />

        <h1 className="header__h1">
          Hacker Escape Rooms
        </h1>

        <nav className="menuDesktop--hide">
          <ul>

            <li className="menu__options">
              <a href="#">Play online</a>
            </li>

            <li className="menu__options">
              <a href="#">Play on-site</a>
            </li>

            <li className="menu__options">
              <a href="#">The story</a>
            </li>

            <li className="menu__options">
              <a href="#">Contact us</a>
            </li>

          </ul>
        </nav>

      </header>
    </>
  );
}