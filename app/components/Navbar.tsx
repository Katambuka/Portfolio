
"use client";
// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

interface NavbarProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ activeSection, isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#services', text: 'Services' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? isDarkMode
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold flex items-center">
            <div className="rounded-full overflow-hidden w-12 h-12 border-2 border-transparent hover:border-primary transition-all">
              <Image
                src="/images/logo202.jpeg"
                alt="My Logo"
                width={90}
                height={110}
                className="object-cover w-full h-full"
              />
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${activeSection === link.href.substring(1)
                    ? isDarkMode
                      ? 'bg-accent text-white'
                      : 'bg-primary text-white'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-primary'
                  }`}
              >
                {link.text}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FiSun className="h-5 w-5 text-yellow-300" />
              ) : (
                <FiMoon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === link.href.substring(1)
                    ? isDarkMode
                      ? 'bg-accent text-white'
                      : 'bg-primary text-white'
                    : isDarkMode
                      ? 'text-blue-300 hover:bg-gray-800 hover:text-white'
                      : 'text-green-700 hover:bg-gray-100 hover:text-primary'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              {isDarkMode ? (
                <span className="flex items-center">
                  <FiSun className="mr-2 h-5 w-5 text-yellow-300" /> Light Mode
                </span>
              ) : (
                <span className="flex items-center">
                  <FiMoon className="mr-2 h-5 w-5 text-gray-700" /> Dark Mode
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
