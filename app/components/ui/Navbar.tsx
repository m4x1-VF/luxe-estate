"use client";

import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

interface NavbarProps {
  onSearch?: () => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: "Buy", href: "#", active: true },
    { label: "Rent", href: "#", active: false },
    { label: "Sell", href: "#", active: false },
    { label: "Saved Homes", href: "#", active: false },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--card-border)] bg-[var(--nav-bg)] backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-[var(--mosque)] flex items-center justify-center transition-colors">
              <span className="material-icons text-white text-lg">apartment</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
              LuxeEstate
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium px-1 py-1 transition-all border-b-2 ${
                  link.active
                    ? "text-[var(--mosque)] border-[var(--mosque)]"
                    : "text-[var(--foreground)]/70 hover:text-[var(--foreground)] hover:border-[var(--foreground)]/20"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--mosque)]/10 transition-all duration-200 group"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {/* Sun icon (shown in dark mode) */}
              <span
                className={`material-icons absolute transition-all duration-300 ${
                  theme === "dark"
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-90 scale-0"
                }`}
              >
                light_mode
              </span>
              {/* Moon icon (shown in light mode) */}
              <span
                className={`material-icons absolute transition-all duration-300 ${
                  theme === "light"
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-0"
                }`}
              >
                dark_mode
              </span>
            </button>

            <button
              onClick={onSearch}
              className="text-[var(--foreground)] hover:text-[var(--mosque)] transition-colors"
            >
              <span className="material-icons">search</span>
            </button>
            <button className="text-[var(--foreground)] hover:text-[var(--mosque)] transition-colors relative">
              <span className="material-icons">notifications_none</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[var(--background)]"></span>
            </button>
            <button className="flex items-center gap-2 pl-2 border-l border-[var(--card-border)] ml-2 transition-colors">
              <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-transparent hover:ring-[var(--mosque)] transition-all">
                <img
                  alt="Profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAWhQZ663Bd08kmzjbOPmUk4UIxYooNONShMEFXLR-DtmVi6Oz-TiaY77SPwFk7g0OobkeZEOMvt6v29mSOD0Xm2g95WbBG3ZjWXmiABOUwGU0LOySRfVDo-JTXQ0-gtwjWxbmue0qDm91m-zEOEZwAW6iRFB1qC1bAU-wkjxm67Sbztq8w7srHkFT9bVEC86qG-FzhOBTomhAurNRmx9l8Yfqabk328NfdKuVLckgCdaPsNFE3yN65MeoRi05GA_gXIMwG4YDIeA"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-[var(--card-border)] overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                link.active
                  ? "text-[var(--mosque)] bg-[var(--mosque)]/10"
                  : "text-[var(--foreground)] hover:bg-[var(--foreground)]/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}