"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "./NavItems";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  return (
    <header className="fixed w-full z-50 animate-fade-in shadow bg-white font-sans font-medium">
      <div className="flex justify-between items-center py-5 w-10/12 mx-auto">
        {/* Logo (Always Visible) */}
        <div>
          <Link href="/">
            <Image src="/Logo.png" alt="logo" width={50} height={50} priority />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden text-3xl text-blue-950"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars /> {/* ☰ Menu Icon */}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex">
            {navItems.map((item) => (
              <li key={item.id} className="inline-block mx-5">
                <Link href={item.href}>
                  <h2
                    className={`hover:text-blue-950 ${
                      pathname === item.href ? "text-blue-500" : "text-[#333]"
                    }`}
                  >
                    {item.title}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-3 justify-center">
          <div>
            <Button className="bg-blue-950 shadow-md font-medium hover:bg-[#f7c769]"><Link href="https://calendly.com/goalquestacademy/consultation">
              Book Appointment
              </Link>
            </Button>
          </div>
          <div className="">
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-3xl text-blue-950"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes /> {/* ✖ Close Icon */}
        </button>

        {/* Mobile Navigation */}
        <nav className="flex flex-col items-start mt-16 p-6">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  <h2
                    className={`text-xl hover:text-blue-950 ${
                      pathname === item.href ? "text-blue-500" : "text-[#333]"
                    }`}
                  >
                    {item.title}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <div className="mt-8 ">
            <Button
              className="bg-blue-950 shadow-md font-medium hover:bg-[#f7c769]"
              onClick={() => setMenuOpen(false)}
            >
             <Link href="https://calendly.com/goalquestacademy/consultation">
              Book Appointment
              </Link>
            </Button>
          </div>
          <div className="mt-8">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
