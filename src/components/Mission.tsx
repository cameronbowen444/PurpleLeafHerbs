"use client";

import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-[#fffaf5] px-4 py-24 text-[#302133]"
    >
      {/* Soft background glow */}
      <div className="absolute left-[-16%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#d9c1e5]/35 blur-[140px]" />
      <div className="absolute bottom-[-25%] right-[-16%] h-[480px] w-[480px] rounded-full bg-[#d8ead0]/60 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 26, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[3rem] border border-[#d8c6df]/60 bg-[#f8f0e8] px-6 py-20 text-center shadow-[0_24px_80px_rgba(76,51,88,0.08)] md:px-12 md:py-24"
        >
          {/* Decorative herb shapes */}
          <div className="absolute -left-10 top-10 h-44 w-44 rounded-full border border-[#a98bb8]/25" />
          <div className="absolute -right-12 bottom-8 h-52 w-52 rounded-full border border-[#d8ead0]/80" />

          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-10 bottom-10 hidden text-6xl text-[#a98bb8]/25 md:block"
          >
            ✿
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-12 top-12 hidden text-7xl text-[#7d9b70]/20 md:block"
          >
            ✿
          </motion.div>

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