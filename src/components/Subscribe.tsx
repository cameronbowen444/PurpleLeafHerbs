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
      className="relative overflow-hidden bg-[#fffaf5] px-4 py-16 text-[#302133] md:py-20"
    >
      {/* Desktop-only soft background */}
      <div className="absolute left-[-18%] top-[-20%] hidden h-[440px] w-[440px] rounded-full bg-[#d9c1e5]/30 blur-3xl md:block" />
      <div className="absolute bottom-[-25%] right-[-16%] hidden h-[500px] w-[500px] rounded-full bg-[#d8ead0]/35 blur-3xl md:block" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.75rem] border-2 border-[#7d9b70]/70 bg-[#f8f0e8] px-6 py-12 text-center shadow-[0_18px_55px_rgba(76,51,88,0.08)] md:rounded-[3.5rem] md:px-12 md:py-16"
        >
          {/* Top accent lines */}
          <div className="absolute left-0 top-0 h-2 w-full bg-[#7d9b70]" />
          <div className="absolute left-0 top-2 h-2 w-full bg-[#8f6ca1]" />

          {/* Botanical accents */}
          <div className="pointer-events-none absolute -left-8 top-10 text-8xl text-[#a98bb8]/15">
            ✿
          </div>

          <div className="pointer-events-none absolute -right-8 bottom-8 text-8xl text-[#7d9b70]/15">
            ❧
          </div>

          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#7d9b70] bg-[#fffaf5] text-[#8f6ca1] shadow-[0_12px_35px_rgba(76,51,88,0.1)]">
              <FiMail size={24} />
            </div>

            <div className="mb-5 inline-block">
              <div className="relative inline-block">
                <span className="absolute -left-4 top-1/2 h-3 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />

                <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.38em] text-[#8f6ca1]">
                  Subscribe
                </p>
              </div>
            </div>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-6xl">
              Choose what you want to receive.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#6f5b75]">
              Get plant-centered blog notes, simple wellness updates, and
              occasional promotions from Purple Leaf Herbs.
            </p>

            {/* Options */}
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {subscriptionOptions.map((option) => {
                const active = selected === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelected(option.id)}
                    className={`group rounded-[2rem] border-2 p-5 text-left transition-all duration-300 ${
                      active
                        ? "border-[#7d9b70] bg-[#3b243f] text-white shadow-[0_14px_35px_rgba(59,36,63,0.16)]"
                        : "border-[#d8c6df]/80 bg-white/70 text-[#3b243f] hover:border-[#7d9b70]"
                    }`}
                  >
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full text-xl transition-colors duration-300 ${
                        active
                          ? "bg-[#fffaf5] text-[#8f6ca1]"
                          : "bg-[#f8f0e8] text-[#7d9b70]"
                      }`}
                    >
                      {option.icon}
                    </div>

                    <p className="font-serif text-2xl">{option.title}</p>

                    <p
                      className={`mt-3 text-sm leading-6 ${
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
              className="mx-auto mt-8 grid max-w-2xl gap-3 rounded-[2rem] border border-[#d8c6df]/70 bg-white/80 p-3 shadow-[0_12px_35px_rgba(76,51,88,0.06)] sm:grid-cols-[1fr_auto]"
            >
              <input
                type="email"
                placeholder="Email address"
                className="min-h-14 rounded-full bg-transparent px-5 text-[#3b243f] outline-none placeholder:text-[#9b8aa1]"
              />

              <button
                type="submit"
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-[#7d9b70] bg-[#3b243f] px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8f6ca1]"
              >
                Join List
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>

            <p className="mt-4 text-xs text-[#8b6a99]">
              You selected:{" "}
              <span className="font-semibold text-[#7d9b70]">
                {subscriptionOptions.find((option) => option.id === selected)
                  ?.title}
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Subscribe;