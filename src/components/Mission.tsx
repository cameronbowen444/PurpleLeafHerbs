"use client";

import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-[#fffaf5] px-4 py-20 text-[#302133] md:py-24"
    >
      {/* Desktop-only soft background glow */}
      <div className="absolute left-[-16%] top-[-20%] hidden h-[360px] w-[360px] rounded-full bg-[#d9c1e5]/30 blur-3xl md:block lg:h-[420px] lg:w-[420px]" />
      <div className="absolute bottom-[-25%] right-[-16%] hidden h-[400px] w-[400px] rounded-full bg-[#d8ead0]/45 blur-3xl md:block lg:h-[480px] lg:w-[480px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 22, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-[#d8c6df]/60 bg-[#f8f0e8] px-6 py-16 text-center shadow-[0_14px_45px_rgba(76,51,88,0.07)] md:rounded-[3rem] md:px-12 md:py-24"
        >
          {/* Decorative herb shapes */}
          <div className="absolute -left-10 top-10 h-36 w-36 rounded-full border border-[#a98bb8]/20 md:h-44 md:w-44" />
          <div className="absolute -right-12 bottom-8 h-40 w-40 rounded-full border border-[#d8ead0]/70 md:h-52 md:w-52" />

          {/* Static decorative flowers instead of infinite animations */}
          <div className="absolute left-10 bottom-10 hidden text-6xl text-[#a98bb8]/25 md:block">
            ✿
          </div>

          <div className="absolute right-12 top-12 hidden text-7xl text-[#7d9b70]/20 md:block">
            ✿
          </div>

          <div className="relative z-10 mx-auto max-w-5xl">
            <p className="mb-7 text-4xl text-[#3b243f]">✿</p>

            <p className="mb-5 text-xs font-medium uppercase tracking-[0.38em] text-[#8b6a99]">
              Mission Statement
            </p>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-6xl">
              To support vitality through herbs, whole foods, and a grounded
              lifestyle.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#6f5b75]">
              Purple Leaf Herbs helps nurture the connection between mind, body,
              and soul through simple, earth-rooted wellness.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;