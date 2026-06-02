"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiX } from "react-icons/fi";

const ContactModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Static Contact Button */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ y: 70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#3b243f] px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(59,36,63,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a98bb8]"
      >
        Contact
        <FiArrowUpRight />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] overflow-y-auto bg-[#2b1731]/35 px-4 py-6 backdrop-blur-xl md:py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close by clicking background */}
            <button
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default"
              aria-label="Close contact modal background"
            />

            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative z-10 mx-auto min-h-[calc(100vh-3rem)] max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#fffaf5] shadow-[0_35px_120px_rgba(43,23,49,0.35)] md:min-h-[calc(100vh-5rem)]"
            >
              {/* Decorative glows */}
              <div className="absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#d9c1e5]/45 blur-[130px]" />
              <div className="absolute bottom-[-20%] right-[-15%] h-[480px] w-[480px] rounded-full bg-[#d8ead0]/65 blur-[150px]" />

              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#3b243f] shadow-lg backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:bg-[#3b243f] hover:text-white"
                aria-label="Close contact form"
              >
                <FiX size={22} />
              </button>

              <div className="relative z-10 grid min-h-[inherit] lg:grid-cols-[0.9fr_1.1fr]">
                {/* Left side */}
                <div className="flex flex-col justify-between bg-[#3b243f] p-8 text-white md:p-12">
                  <div>
                    <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-white/45">
                      Purple Leaf Herbs
                    </p>

                    <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.06em] md:text-7xl">
                      Begin with a simple question.
                    </h2>

                    <p className="mt-7 max-w-md text-lg leading-8 text-white/70">
                      Ask about herbs, nutrition coaching, natural products, or
                      gentle lifestyle support.
                    </p>
                  </div>

                  <div className="mt-12">
                    <div className="mb-7 h-px w-full bg-white/15" />

                    <a
                      href="mailto:brooke@purpleleafherbs.com"
                      className="group inline-flex items-center gap-3 text-sm font-semibold text-white/85 transition-colors duration-300 hover:text-white"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
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
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#8b6a99]">
                      Contact Form
                    </p>

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
                        className="w-full rounded-2xl border border-[#d8c6df]/80 bg-white/70 px-5 py-4 text-[#3b243f] outline-none transition-all duration-300 placeholder:text-[#9b8aa1] focus:border-[#a98bb8] focus:bg-white focus:shadow-[0_12px_40px_rgba(76,51,88,0.08)]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-[#6f5b75]">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-[#d8c6df]/80 bg-white/70 px-5 py-4 text-[#3b243f] outline-none transition-all duration-300 placeholder:text-[#9b8aa1] focus:border-[#a98bb8] focus:bg-white focus:shadow-[0_12px_40px_rgba(76,51,88,0.08)]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-[#6f5b75]">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Optional"
                        className="w-full rounded-2xl border border-[#d8c6df]/80 bg-white/70 px-5 py-4 text-[#3b243f] outline-none transition-all duration-300 placeholder:text-[#9b8aa1] focus:border-[#a98bb8] focus:bg-white focus:shadow-[0_12px_40px_rgba(76,51,88,0.08)]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-[#6f5b75]">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell Brooke what you are interested in..."
                        className="w-full resize-none rounded-2xl border border-[#d8c6df]/80 bg-white/70 px-5 py-4 text-[#3b243f] outline-none transition-all duration-300 placeholder:text-[#9b8aa1] focus:border-[#a98bb8] focus:bg-white focus:shadow-[0_12px_40px_rgba(76,51,88,0.08)]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3b243f] px-7 py-4 text-sm font-semibold text-white shadow-[0_20px_55px_rgba(59,36,63,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a98bb8]"
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