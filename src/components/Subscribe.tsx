"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

const Subscribe = () => {
  return (
    <section
      id="subscribe"
      className="relative overflow-hidden bg-[#fffaf5] px-4 py-24 text-[#302133]"
    >
      {/* Soft background */}
      <div className="absolute left-[-18%] top-[-20%] h-[440px] w-[440px] rounded-full bg-[#d9c1e5]/35 blur-[140px]" />
      <div className="absolute bottom-[-25%] right-[-16%] h-[500px] w-[500px] rounded-full bg-[#d8ead0]/60 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ y: 26, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[3rem] border border-[#d8c6df]/70 bg-[#f8f0e8] px-6 py-16 text-center shadow-[0_24px_80px_rgba(76,51,88,0.08)] md:px-12"
        >
          {/* Small botanical accents */}
          <div className="absolute -left-8 top-8 text-8xl text-[#a98bb8]/15">
            ✿
          </div>

          <div className="absolute -right-8 bottom-6 text-8xl text-[#7d9b70]/15">
            ✿
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/70 text-[#8f6ca1] shadow-sm backdrop-blur-xl">
              <FiMail size={22} />
            </div>

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.38em] text-[#8b6a99]">
              Subscribe
            </p>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-6xl">
              Stay close to the roots.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#6f5b75]">
              Receive gentle notes on herbs, nourishment, and natural wellness.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-9 flex max-w-xl flex-col gap-3 rounded-full bg-white/70 p-2 shadow-[0_16px_45px_rgba(76,51,88,0.08)] backdrop-blur-xl sm:flex-row"
            >
              <input
                type="email"
                placeholder="Email address"
                className="min-h-14 flex-1 rounded-full bg-transparent px-5 text-[#3b243f] outline-none placeholder:text-[#9b8aa1]"
              />

              <button
                type="submit"
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#3b243f] px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#a98bb8]"
              >
                Subscribe
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>

            <p className="mt-4 text-xs text-[#8b6a99]">
              No pressure. Just simple plant-centered wellness notes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Subscribe;