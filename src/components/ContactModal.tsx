"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiX } from "react-icons/fi";

type ContactModalProps = {
  label?: string;
  className?: string;
  floating?: boolean;
  showIcon?: boolean;
};

const ContactModal = ({
  label = "Contact",
  className = "",
  floating = false,
  showIcon = true,
}: ContactModalProps) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const defaultButtonClass = floating
    ? "fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full border-2 border-[#7d9b70] bg-[#906198] px-6 py-4 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(59,36,63,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8f6ca1]"
    : "group inline-flex items-center gap-2 rounded-full border-2 border-[#7d9b70] bg-[#906198] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(59,36,63,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f6ca1]";

  const modal = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 h-dvh overflow-y-auto bg-[#2b1731]/70 px-4 py-4 md:py-6"
          style={{ zIndex: 2147483647 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close background */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="fixed inset-0 h-full w-full cursor-default"
            style={{ zIndex: 1 }}
            aria-label="Close contact modal background"
          />

          {/* Fixed close button */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#7d9b70] bg-white text-[#3b243f] shadow-[0_10px_28px_rgba(43,23,49,0.2)] transition-all duration-300 hover:rotate-90 hover:bg-[#3b243f] hover:text-white md:right-6 md:top-6 "
            style={{ zIndex: 4 }}
            aria-label="Close contact form"
          >
            <FiX size={20} />
          </button>

          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="relative mx-auto my-3 max-w-5xl overflow-hidden rounded-[1.75rem] border border-[#7d9b70]/70 bg-[#fffaf5] shadow-[0_20px_65px_rgba(43,23,49,0.26)] md:my-0 md:rounded-[2rem]"
            style={{ zIndex: 3 }}
          >


            <div className="grid pt-3 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Left side */}
              <div className="relative flex flex-col justify-between overflow-hidden bg-[#906198] p-7 text-white md:p-9 lg:p-10">
                
                <div className="relative z-10">
                  <div className="mb-5 inline-block">
                    <div className="relative inline-block">
                      <span className="absolute -left-3 top-1/2 h-2.5 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/20" />

                      <p className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d8ead0]">
                        Purple Leaf Herbs
                      </p>
                    </div>
                  </div>

                  <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.055em] md:text-5xl">
                    Begin with a simple{" "}
                    <span className="text-[#d8ead0]">question.</span>
                  </h2>

                  <p className="mt-5 max-w-md text-base leading-7 text-white/68">
                    Ask about herbs, nutrition coaching, natural products, or
                    gentle lifestyle support.
                  </p>
                </div>

                <div className="relative z-10 mt-9">
                  <div className="mb-5 h-px w-full bg-white/15" />

                  <a
                    href="mailto:brooke@purpleleafherbs.com"
                    className="group inline-flex items-center gap-3 text-sm font-semibold text-white/85 transition-colors duration-300 hover:text-white"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7d9b70] bg-white/10 text-[#d8ead0]">
                      <FiMail />
                    </span>
                    brooke@purpleleafherbs.com
                  </a>
                </div>
              </div>

              {/* Form side */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col justify-center p-7 md:p-9 lg:p-10"
              >
                <div className="mb-7">
                  <div className="mb-3 inline-block">
                    <div className="relative inline-block">
                      <span className="absolute -left-3 top-1/2 h-2.5 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />

                      <p className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8f6ca1]">
                        Contact Form
                      </p>
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-4xl">
                    What can Brooke help you with?
                  </h3>
                </div>

                <div className="grid gap-4">
                  <div>
                    <label className="mb-1.5 block text-sm text-[#6f5b75]">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm text-[#3b243f] outline-none transition-all duration-300 placeholder:text-[#9b8aa1] focus:border-[#7d9b70]"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm text-[#6f5b75]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm text-[#3b243f] outline-none transition-all duration-300 placeholder:text-[#9b8aa1] focus:border-[#7d9b70]"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm text-[#6f5b75]">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Optional"
                      className="w-full rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm text-[#3b243f] outline-none transition-all duration-300 placeholder:text-[#9b8aa1] focus:border-[#7d9b70]"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm text-[#6f5b75]">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell Brooke what you are interested in..."
                      className="w-full resize-none rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm text-[#3b243f] outline-none transition-all duration-300 placeholder:text-[#9b8aa1] focus:border-[#7d9b70]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#7d9b70] bg-[#906198] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(59,36,63,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f6ca1]"
                >
                  Submit Message
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={floating ? { y: 60, opacity: 0 } : false}
        animate={floating ? { y: 0, opacity: 1 } : false}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={className || defaultButtonClass}
        style={floating ? { zIndex: 40 } : undefined}
      >
        {label}
        {showIcon && <FiArrowUpRight />}
      </motion.button>

      {mounted ? createPortal(modal, document.body) : null}
    </>
  );
};

export default ContactModal;