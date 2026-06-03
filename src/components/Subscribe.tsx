"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiBookOpen, FiTag } from "react-icons/fi";

const subscriptionOptions = [
  {
    id: "blog",
    title: "Blog Notes",
    text: "Herbal stories, wellness ideas, and gentle education.",
    icon: <FiBookOpen />,
  },
  {
    id: "promotions",
    title: "Promotions",
    text: "Updates on offerings, products, events, and specials.",
    icon: <FiTag />,
  },
  {
    id: "both",
    title: "Both",
    text: "Receive blog notes and occasional promotional updates.",
    icon: <FiMail />,
  },
];

const Subscribe = () => {
  const [selected, setSelected] = useState("both");

  return (
    <section
      id="subscribe"
      className="relative overflow-hidden bg-[#fffaf5] px-4 py-12 text-[#302133] md:py-14"
    >
      {/* Desktop-only soft background */}
      <div className="absolute left-[-18%] top-[-20%] hidden h-[360px] w-[360px] rounded-full bg-[#d9c1e5]/25 blur-3xl md:block" />
      <div className="absolute bottom-[-25%] right-[-16%] hidden h-[400px] w-[400px] rounded-full bg-[#d8ead0]/30 blur-3xl md:block" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-[#7d9b70]/60 bg-[#f8f0e8] px-5 py-8 text-center shadow-[0_12px_35px_rgba(76,51,88,0.07)] md:rounded-[2.5rem] md:px-9 md:py-10"
        >
          {/* Top accent lines */}
          <div className="absolute left-0 top-0 h-1.5 w-full bg-[#7d9b70]" />
          <div className="absolute left-0 top-1.5 h-1.5 w-full bg-[#8f6ca1]" />

          
          <div className="relative z-10 mx-auto max-w-4xl">
            
            <div className="mb-4 inline-block">
              <div className="relative inline-block">
                <span className="absolute -left-3 top-1/2 h-2.5 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />

                <p className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8f6ca1]">
                  Subscribe
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-5xl">
              Choose what you want to receive.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6f5b75] md:text-base">
              Get plant-centered blog notes, simple wellness updates, and
              occasional promotions from Purple Leaf Herbs.
            </p>

            {/* Options */}
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {subscriptionOptions.map((option) => {
                const active = selected === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelected(option.id)}
                    className={`group rounded-[1.4rem] border p-4 text-left transition-all duration-300 ${
                      active
                        ? "border-[#7d9b70] bg-[#3b243f] text-white shadow-[0_10px_26px_rgba(59,36,63,0.14)]"
                        : "border-[#d8c6df]/80 bg-white/70 text-[#3b243f] hover:border-[#7d9b70]"
                    }`}
                  >
                    <div
                      className={`mb-3 flex h-9 w-9 items-center justify-center rounded-full text-base transition-colors duration-300 ${
                        active
                          ? "bg-[#fffaf5] text-[#8f6ca1]"
                          : "bg-[#f8f0e8] text-[#7d9b70]"
                      }`}
                    >
                      {option.icon}
                    </div>

                    <p className="font-serif text-xl">{option.title}</p>

                    <p
                      className={`mt-2 text-xs leading-5 ${
                        active ? "text-white/70" : "text-[#6f5b75]"
                      }`}
                    >
                      {option.text}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-6 grid max-w-2xl gap-2 rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/80 p-2 shadow-[0_10px_28px_rgba(76,51,88,0.05)] sm:grid-cols-[1fr_auto]"
            >
              <input
                type="email"
                placeholder="Email address"
                className="min-h-11 rounded-full bg-transparent px-4 text-sm text-[#3b243f] outline-none placeholder:text-[#9b8aa1]"
              />

              <button
                type="submit"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#7d9b70] bg-[#3b243f] px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8f6ca1]"
              >
                Join List
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>

            <p className="mt-3 text-xs text-[#8b6a99]">
              You selected:{" "}
              <span className="font-semibold text-[#7d9b70]">
                {
                  subscriptionOptions.find((option) => option.id === selected)
                    ?.title
                }
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Subscribe;