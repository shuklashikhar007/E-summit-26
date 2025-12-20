"use client";

import React, { useState, useEffect, FunctionComponent, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/public/logos/E-Cell-White[1].png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const navItems = [
  { name: "EVENTS", link: "/events" },
  { name: "SPEAKERS", link: "/speakers" },
  { name: "PARTNERS", link: "/partners" },
  { name: "MERCH", link: "/merch" },
  { name: "INITIATIVE", link: "/initiative" },
];

const sjCities = ["delhi", "ahmedabad", "bangalore"];

const Navbar: FunctionComponent = () => {
  const pathname = usePathname();

  const [scrolling, setScrolling] = useState(false);
  const [isHoveringSJ, setIsHoveringSJ] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSJEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsHoveringSJ(true);
  };

  const handleSJLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHoveringSJ(false);
    }, 120);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const gradientButtonStyle = {
    background: "linear-gradient(90deg,#F1E821,#23C0AD,#487AFA)",
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed left-1/2 -translate-x-1/2
          z-[9999] isolate
          w-full max-w-[76.5rem]
          px-4 md:px-0
          transition-all duration-300
          ${scrolling ? "top-2" : "top-4"}
        `}
      >
        <nav
          className={`
            relative w-full
            rounded-[999px]
            transition-all duration-300 ease-out
            ${
              scrolling
                ? "bg-black/85 border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.75)] backdrop-blur-2xl scale-[0.98]"
                : "bg-black/75 border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
            }
          `}
        >
          <div className="pointer-events-none absolute inset-0 rounded-[999px] ring-1 ring-white/5" />

          <div className="relative px-4 md:px-6 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 shrink-0 group">
                <Image
                  unoptimized
                  src={logo}
                  alt="E-Summit Logo"
                  width={60}
                  height={60}
                  className={`object-contain transition-transform duration-300 ${
                    scrolling ? "scale-[0.9]" : "scale-100"
                  }`}
                />
                <span className="hidden sm:inline-block text-[13px] tracking-[0.18em] uppercase text-white/70 group-hover:text-white transition-colors">
                  E-Summit 26
                </span>
              </Link>

              {/* ================= DESKTOP NAV ================= */}
              <div className="hidden lg:flex items-center justify-between flex-1">
                <ul className="flex items-center gap-1 mx-auto text-[15px] font-medium">
                  {navItems.map((item) => {
                    const isActive = pathname === item.link;
                    return (
                      <li key={item.link}>
                        <Link
                          href={item.link}
                          className={`px-4 py-2 rounded-full transition-all duration-200 ${
                            isActive
                              ? "text-white bg-white/10"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}

                  {/* SJ */}
                  <li
                    onMouseEnter={handleSJEnter}
                    onMouseLeave={handleSJLeave}
                    className="relative"
                  >
                    <DropdownMenu open={isHoveringSJ} modal={false}>
                      <DropdownMenuTrigger asChild>
                        <button className="px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/5 flex items-center gap-1 text-[15px] font-medium transition-colors">
                          SJ
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${
                              isHoveringSJ ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent className="mt-2 w-56 rounded-2xl bg-[#050505]/95 text-white border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                        <DropdownMenuLabel className="text-xs text-white/60">
                          Startup Junction
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-white/15" />

                        {sjCities.map((city) => (
                          <DropdownMenuItem key={city}>
                            <Link
                              href={`/SJ/${city}`}
                              className="flex w-full items-center justify-between text-[15px]"
                            >
                              SJ – {city.charAt(0).toUpperCase() + city.slice(1)}
                              <ChevronDown
                                size={13}
                                className="rotate-[-90deg] text-white/40"
                              />
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                </ul>

                {/* Register */}
                <Link href="/payment?type=esummit">
                  <Button
                    className="rounded-full text-[15px] font-semibold text-white px-5 py-2 h-auto hover:scale-[1.04] shadow-[0_0_18px_rgba(35,192,173,0.65)]"
                    style={gradientButtonStyle}
                  >
                    Register
                  </Button>
                </Link>
              </div>

              {/* ================= MOBILE TOGGLE ================= */}
              <div className="flex lg:hidden">
                <Button
                  variant="outline"
                  className="bg-transparent border-white/15 text-white rounded-full h-9 w-9 p-0"
                  onClick={() => setIsMobileMenuOpen((p) => !p)}
                >
                  {isMobileMenuOpen ? <X /> : <Menu />}
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[9998] lg:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-xl transition-opacity ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
        />

        <div
          className={`absolute top-0 left-0 right-0 bg-[#050505] pt-20 pb-10 px-6 rounded-b-3xl border-b border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.9)] transform transition-transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="space-y-2 text-[17px] font-medium">
            {navItems.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  onClick={closeMobileMenu}
                  className="block py-3 border-b border-white/10 text-white/85"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link href="/payment?type=esummit" onClick={closeMobileMenu}>
              <Button
                className="w-full rounded-full py-3 text-[16px] font-semibold text-white shadow-[0_0_18px_rgba(35,192,173,0.65)]"
                style={gradientButtonStyle}
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <ToastContainer />
      <Script
        src="https://www.townscript.com/static/Bookingflow/js/townscript-widget.nocache.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default Navbar;
