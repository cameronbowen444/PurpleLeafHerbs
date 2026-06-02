"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiMail, FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Mission", href: "#mission" },
  { label: "Quotes", href: "#quotes" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "px-4 py-3" : "px-4 py-5"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border transition-all duration-300 ${
            scrolled
              ? "border-purple-200/60 bg-white/95 px-4 py-3 shadow-[0_14px_40px_rgba(95,65,120,0.12)] md:bg-white/75 md:backdrop-blur-xl"
              : "border-transparent bg-transparent px-2 py-2"
          }`}
        >
          {/* Logo */}
          <Link href="#home" className="group flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-purple-200/70 bg-white shadow-md">
              <Image
                src="/assets/logo.jpg"
                alt="Purple Leaf Herbs logo"
                fill
                sizes="48px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>

            <div className="leading-tight">
              <p className="font-serif text-xl text-[#3b243f] md:text-2xl">
                Purple Leaf Herbs
              </p>
              <p className="hidden text-xs tracking-[0.25em] text-[#9b83a8] md:block">
                SACRED PLANT SECRETS
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 rounded-full border border-purple-100/80 bg-white/70 p-1 shadow-inner shadow-purple-100/50 md:backdrop-blur-sm lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-[#4b3d4f] transition-all duration-300 hover:bg-[#b39ac1]/20 hover:text-[#6d4b7c]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="mailto:brooke@purpleleafherbs.com"
              className="flex items-center gap-2 rounded-full border border-purple-100 bg-white/80 px-4 py-2 text-sm text-[#4b3d4f] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <FiMail />
              Email
            </a>

            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-[#a98bb8] px-5 py-3 text-sm font-medium text-white shadow-[0_14px_35px_rgba(130,91,151,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f6ca1]"
            >
              Ask Questions
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-100 bg-white/95 text-[#3b243f] shadow-md lg:hidden"
            aria-label="Open menu"
          >
            <FiMenu size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] bg-[#231527]/50 p-4 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default"
              aria-label="Close menu background"
            />

            <motion.div
              initial={{ y: -24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -18, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative z-10 overflow-hidden rounded-[2rem] border border-white/60 bg-[#fffaf5] p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-md">
                    <Image
                      src="/assets/logo.jpg"
                      alt="Purple Leaf Herbs logo"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-serif text-xl text-[#3b243f]">
                      Purple Leaf Herbs
                    </p>
                    <p className="text-xs tracking-[0.2em] text-[#9b83a8]">
                      HOLISTIC HERBALISM
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#3b243f] shadow-md"
                  aria-label="Close menu"
                >
                  <FiX size={22} />
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-purple-100 bg-white/75 px-5 py-4 text-lg text-[#3b243f] shadow-sm transition-all hover:bg-purple-50"
                  >
                    {link.label}
                    <FiArrowUpRight className="text-[#a98bb8]" />
                  </Link>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#a98bb8] px-6 py-4 font-medium text-white shadow-md"
                >
                  Ask Questions Here
                  <FiArrowUpRight />
                </Link>

                <a
                  href="mailto:brooke@purpleleafherbs.com"
                  className="mt-4 flex items-center justify-center gap-2 text-sm text-[#6f5b75]"
                >
                  <FiMail />
                  brooke@purpleleafherbs.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;