"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiX } from "react-icons/fi";

const ContactModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Static Contact Button */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border-2 border-[#7d9b70] bg-[#3b243f] px-6 py-4 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(59,36,63,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8f6ca1]"
      >
        Contact
        <FiArrowUpRight />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] bg-[#2b1731]/60 px-4 py-5 md:py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close background */}
            <button
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default"
              aria-label="Close contact modal background"
            />

            {/* Fixed close button */}
            <button
              onClick={() => setOpen(false)}
              className="fixed right-5 top-5 z-[1001] flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#7d9b70] bg-white text-[#3b243f] shadow-[0_12px_35px_rgba(43,23,49,0.22)] transition-all duration-300 hover:rotate-90 hover:bg-[#3b243f] hover:text-white md:right-8 md:top-8"
              aria-label="Close contact form"
            >
              <FiX size={22} />
            </button>

            <motion.div
              initial={{ y: 28, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-10 mx-auto flex max-h-[calc(100vh-2.5rem)] max-w-6xl overflow-hidden rounded-[2rem] border-2 border-[#7d9b70]/70 bg-[#fffaf5] shadow-[0_24px_80px_rgba(43,23,49,0.28)] md:max-h-[calc(100vh-4rem)] md:rounded-[2.5rem]"
            >
              {/* Top accent lines */}
              <div className="absolute left-0 top-0 z-20 h-2 w-full bg-[#7d9b70]" />
              <div className="absolute left-0 top-2 z-20 h-2 w-full bg-[#8f6ca1]" />

              <div className="grid w-full overflow-y-auto pt-4 lg:grid-cols-[0.9fr_1.1fr]">
                {/* Left side */}
                <div className="relative flex flex-col justify-between overflow-hidden bg-[#3b243f] p-8 text-white md:p-12">
                  {/* Decorative background */}
                  <div className="pointer-events-none absolute -left-10 top-10 text-8xl text-[#a98bb8]/20">
                    ✿
                  </div>
                  <div className="pointer-events-none absolute -right-8 bottom-8 text-8xl text-[#7d9b70]/20">
                    ❧
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 inline-block">
                      <div className="relative inline-block">
                        <span className="absolute -left-3 top-1/2 h-3 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/20" />

                        <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8ead0]">
                          Purple Leaf Herbs
                        </p>
                      </div>
                    </div>

                    <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.06em] md:text-7xl">
                      Begin with a simple{" "}
                      <span className="text-[#d8ead0]">question.</span>
                    </h2>

                    <p className="mt-7 max-w-md text-lg leading-8 text-white/70">
                      Ask about herbs, nutrition coaching, natural products, or
                      gentle lifestyle support.
                    </p>
                  </div>

                  <div className="relative z-10 mt-12">
                    <div className="mb-7 h-px w-full bg-white/15" />

                    <a
                      href="mailto:brooke@purpleleafherbs.com"
                      className="group inline-flex items-center gap-3 text-sm font-semibold text-white/85 transition-colors duration-300 hover:text-white"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7d9b70] bg-white/10 text-[#d8ead0]">
                        <FiMail />
                      </span>
                      brooke@purpleleafherbs.com
                    </a>
                  </div>
                </div>

                {/* Form side */}
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col justify-center p-8 md:p-12 lg:p-16"
                >
                  <div className="mb-10">
                    <div className="mb-4 inline-block">
                      <div className="relative inline-block">
                        <span className="absolute -left-3 top-1/2 h-3 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />

                        <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.35em] text-[#8f6ca1]">
                          Contact Form
                        </p>
                      </div>
                    </div>

                    <h3 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-5xl">
                      What can Brooke help you with?
                    </h3>
                  </div>

                  <div className="grid gap-5">
                    <div>
                      <label className="mb-2 block text-sm text-[#6f5b75]">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-[#d8c6df]/80 bg-white px-5 py-4 text-[#3b243f] outline-none transition-all duration-300 placeholder:text-[#9b8aa1] focus:border-[#7d9b70]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-[#6f5b75]">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-[#d8c6df]/80 bg-white px-5 py-4 text-[#3b243f] outline-none transition-all duration-300 placeholder:text-[#9b8aa1] focus:border-[#7d9b70]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-[#6f5b75]">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Optional"
                        className="w-full rounded-2xl border border-[#d8c6df]/80 bg-white px-5 py-4 text-[#3b243f] outline-none transition-all duration-300 placeholder:text-[#9b8aa1] focus:border-[#7d9b70]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-[#6f5b75]">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell Brooke what you are interested in..."
                        className="w-full resize-none rounded-2xl border border-[#d8c6df]/80 bg-white px-5 py-4 text-[#3b243f] outline-none transition-all duration-300 placeholder:text-[#9b8aa1] focus:border-[#7d9b70]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#7d9b70] bg-[#3b243f] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_38px_rgba(59,36,63,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8f6ca1]"
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
    </>
  );
};

export default ContactModal;