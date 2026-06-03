"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiMail, FiArrowUpRight } from "react-icons/fi";
import ContactModal from "./ContactModal";

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

  return (
    <>
      {/* Fixed navbar only */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#d8c6df]/70 bg-[#fffaf5]/95 shadow-[0_8px_30px_rgba(59,36,63,0.08)] ">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 ">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#d8c6df] bg-white shadow-sm md:h-11 md:w-11">
              <Image
                src="/assets/logo-4.png"
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
                  className="relative text-xs font-semibold uppercase tracking-[0.18em] text-[#4b3d4f] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#7d9b70] after:transition-all after:duration-300 hover:text-[#3b243f] hover:after:w-full"
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
                className="group flex items-center gap-2 rounded-full border-2 border-[#7d9b70] bg-[#906198] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(59,36,63,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f6ca1]"
              >
                Home
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ) : (
              <>
                <a
                  href="mailto:brooke@purpleleafherbs.com"
                  className="flex items-center gap-2 rounded-full border border-[#d8c6df] bg-white px-4 py-2 text-xs font-medium text-[#4b3d4f] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a98bb8]"
                >
                  <FiMail />
                  Email
                </a>

                <ContactModal
  label="Contact"
  className="group inline-flex items-center gap-2 rounded-full border border-[#7d9b70]/80 bg-[#906198] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(59,36,63,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7d9b70] hover:bg-[#8f6ca1]"
/>
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

      {/* Spacer so fixed navbar does not cover page content */}
      <div className="h-[76px] bg-[#fffaf5]" aria-hidden="true" />

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
                      src="/assets/logo-4.png"
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
                    <a
                      href="mailto:brooke@purpleleafherbs.com"
                      className="flex items-center justify-center gap-2 text-sm text-[#6f5b75]"
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