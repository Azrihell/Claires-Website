"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Images
import logo from "@/assets/images/logo_@x2.png";


// --------------

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-holder center-relative relative content-1140">
      <div className="header-logo center-text">
        <Link href="/">
          <img src={logo.src} alt="Opta" />
        </Link>
      </div>

      <button className="menu-toggle-button" onClick={toggleMenu}>
        ☰ {/* Unicode character for a menu icon (hamburger menu) */}
      </button>

      <div className={`menu-holder ${menuOpen ? "open" : ""}`}>
        <nav id="header-main-menu">
          <ul className="main-menu">
            <li>
              <Link href="/" className={pathname === "/" ? "current" : ""}>
                Hearth
              </Link>
            </li>
            <li>
              <Link href="/faire" className={pathname === "/faire" ? "current" : ""}>
                Faire
              </Link>
            </li>
            <li className="dropdown">
              <Link href="/books" className="menu">Books</Link>
              <div className="dropdown-content">
                <Link href="/books/nmf" className="menuItems">New Mune Faire</Link>
                <Link href="/books/colorbook" className="menuItems">Coloring Book</Link>
                <Link href="#" className="menuItems">Coming Soon</Link>
              </div>
            </li>
            <li>
              <Link href="/merch" className={pathname === "/merch" ? "current" : ""}>
                Merch
              </Link>
            </li>
            <li>
              <Link href="/characterpedia" className={pathname === "/characterpedia" ? "current" : ""}>
                CharacterPedia
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === "/contact" ? "current" : ""}>
                Contact
              </Link>
            </li>
            <li>
              <form role="search" className="search-form">
                <label>
                  <input type="search" className="search-field" placeholder="Search" name="search" title="Search for:" />
                </label>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};


export default Header;
