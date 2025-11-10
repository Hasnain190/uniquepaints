"use client";

import { useState } from "react";
import Link from "next/link";
import { PHONE_NUMBER } from "@/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [{ name: "Home", href: "/" }];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-7xl mx-auto bg-cyan/70 backdrop-blur-sm shadow-lg rounded-2xl">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg md:text-2xl font-bold text-yellow"
            >
              Unique Paint Services
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-yellow hover:text-white transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <a
                target="_blank"
                href={`https://wa.me/${PHONE_NUMBER}`}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                Call Now!
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  target="_blank"
                  href={`https://wa.me/${PHONE_NUMBER}`}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 mt-2"
                >
                  Get Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
