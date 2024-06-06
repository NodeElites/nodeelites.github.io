"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  const logoName = "NodeElites";

  const menuItems = [
    {
      name: "Home",
      url: "",
    },
    {
      name: "Community",
      url: "",
    },
    {
      name: "Projects",
      url: "",
    },
  ];

  return (
    <nav className="flex justify-center items-center w-full wrapper">
      <div className="lg:w-[80vw] w-[95vw] px-2 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center text-slate-200 text-3xl font-bold px-3">
            <h1 className={syne.className}>{logoName}</h1>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-center items-center gap-5 text-slate-200">
            {menuItems.map((menuItems, index) => (
              <Link
                href={menuItems.url}
                className="hover:bg-slate-200 hover:text-zinc-900 transition ease-in-out cursor-pointer px-3 py-2 font-medium rounded-md"
                key={index}
              >
                {menuItems.name}
              </Link>
            ))}
          </div>
          {/* Menu Icons */}
          <div className="flex lg:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md text-slate-200 focus:outline-none"
              onClick={toggleNavbar}
              type="button"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={36}
                  height={36}
                  color={"#ffffff"}
                  fill={"none"}
                >
                  <path
                    d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={36}
                  height={36}
                  color={"#ffffff"}
                  fill={"none"}
                >
                  <path
                    d="M10 5L20 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 19L14 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex lg:hidden flex-col justify-center items-center gap-5 mt-3 mb-3">
            {menuItems.map((menuItems, index) => (
              <Link
                href={menuItems.url}
                key={index}
                onClick={closeNavbar}
                className="hover:bg-slate-200 hover:text-zinc-900 transition ease-in-out text-slate-200 w-full cursor-pointer px-3 py-2 font-medium rounded-lg self-start"
              >
                {menuItems.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;