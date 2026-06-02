"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiMail, FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Mission", href: "#mission" },
  { label: "Quotes", href: "#quotes" },
  { label: "Blog", href: "/blog" },
];

type NavbarProps = {
  simple?: boolean;
};

const Navbar = ({ simple = false }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const shouldBeScrolled = window.scrollY > 1;

        if (scrolledRef.current !== shouldBeScrolled) {
          scrolledRef.current = shouldBeScrolled;
          setScrolled(shouldBeScrolled);
        }

        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed header */}
      <header className="fixed left-0 top-0 z-50 w-full bg-[#fffaf5]/95 shadow-[0_8px_30px_rgba(59,36,63,0.08)]">
        {/* Opening brand banner */}
        <motion.div
          animate={{
            height: scrolled ? 0 : "auto",
            opacity: scrolled ? 0 : 1,
            y: scrolled ? -24 : 0,
          }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="hidden overflow-hidden border-b-4 border-[#8f6ca1] md:block"
        >
          <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 py-8 lg:py-10">
            {/* Purple + green botanical atmosphere */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute left-[-4rem] top-4 text-[9rem] leading-none text-[#a98bb8]/10">
                ✿
              </div>
              <div className="absolute left-40 bottom-2 text-[6rem] leading-none text-[#7d9b70]/10">
                ❧
              </div>
              <div className="absolute right-[-3rem] top-2 text-[8rem] leading-none text-[#a98bb8]/10">
                ❧
              </div>
              <div className="absolute right-44 bottom-0 text-[6rem] leading-none text-[#7d9b70]/10">
                ✿
              </div>
            </div>

            <Link
              href="/"
              className="relative z-10 flex items-center gap-5"
              aria-label="Purple Leaf Herbs home"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-[1.4rem] border border-[#d8c6df] bg-[#3b243f] p-2 shadow-[0_14px_35px_rgba(59,36,63,0.16)]">
                <Image
                  src="/assets/logo.jpg"
                  alt="Purple Leaf Herbs logo"
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <p className="font-serif text-4xl leading-none tracking-[0.05em] text-[#3b243f] lg:text-5xl">
                  Purple Leaf Herbs
                </p>

                <div className="relative mt-3 inline-block">
                  <span className="absolute -left-4 top-1/2 h-3 w-[110%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />

                  <span className="relative z-10 text-sm font-semibold uppercase tracking-[0.35em] text-[#8f6ca1]">
                    Sacred Plant Secrets
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="h-1 w-full bg-[#7d9b70]" />
        </motion.div>

        {/* Main nav bar */}
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 md:px-6 ${
            scrolled ? "py-3" : "py-4"
          }`}
        >
          {/* Compact logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className={`relative overflow-hidden rounded-full border border-[#d8c6df] bg-white shadow-sm transition-all duration-300 ${
                scrolled ? "h-11 w-11" : "h-12 w-12 md:h-10 md:w-10"
              }`}
            >
              <Image
                src="/assets/logo.jpg"
                alt="Purple Leaf Herbs logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>

            <div className="leading-tight">
              <p className="font-serif text-xl text-[#3b243f] md:text-lg">
                Purple Leaf Herbs
              </p>
              <p className="hidden text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8f6ca1] sm:block">
                Sacred Plant Secrets
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          {!simple && (
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-semibold uppercase tracking-[0.18em] text-[#4b3d4f] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#7d9b70] after:transition-all after:duration-300 hover:text-[#3b243f] hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Right Side */}
          <div className="hidden items-center gap-3 lg:flex">
            {simple ? (
              <Link
                href="/"
                className="group flex items-center gap-2 rounded-full border-2 border-[#7d9b70] bg-[#3b243f] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(59,36,63,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f6ca1]"
              >
                Home
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ) : (
              <>
                <a
                  href="mailto:brooke@purpleleafherbs.com"
                  className="flex items-center gap-2 rounded-full border border-[#d8c6df] bg-white px-4 py-2 text-sm font-medium text-[#4b3d4f] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a98bb8]"
                >
                  <FiMail />
                  Email
                </a>

                <Link
                  href="#contact"
                  className="group flex items-center gap-2 rounded-full border-2 border-[#7d9b70] bg-[#3b243f] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(59,36,63,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f6ca1]"
                >
                  Contact
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile / tablet menu button */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c6df] bg-white text-[#3b243f] shadow-md lg:hidden"
            aria-label="Open menu"
          >
            <FiMenu size={22} />
          </button>
        </nav>
      </header>

      {/* Spacer keeps page pushed down so fixed navbar does not cover content */}
      <div
        className={`bg-[#fffaf5] transition-all duration-300 ${
          scrolled
            ? "h-[80px] md:h-[76px]"
            : "h-[80px] md:h-[224px] lg:h-[244px]"
        }`}
        aria-hidden="true"
      />

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
                    <p className="text-xs tracking-[0.2em] text-[#8f6ca1]">
                      SACRED PLANT SECRETS
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

              {simple ? (
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#7d9b70] bg-[#3b243f] px-6 py-4 font-medium text-white shadow-md"
                >
                  Home
                  <FiArrowUpRight />
                </Link>
              ) : (
                <>
                  <div className="mt-8 flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-2xl border border-[#d8c6df] bg-white/75 px-5 py-4 text-lg text-[#3b243f] shadow-sm transition-all hover:bg-[#f4edf7]"
                      >
                        {link.label}
                        <FiArrowUpRight className="text-[#8f6ca1]" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-center gap-2 rounded-full border-2 border-[#7d9b70] bg-[#3b243f] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(59,36,63,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f6ca1]"
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
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;