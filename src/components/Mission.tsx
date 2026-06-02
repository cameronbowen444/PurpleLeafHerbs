"use client";

import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-[#fffaf5] px-4 py-16 text-[#302133] md:py-20"
    >
      {/* Desktop-only background glow */}
      <div className="absolute left-[-16%] top-[-20%] hidden h-[360px] w-[360px] rounded-full bg-[#d9c1e5]/30 blur-3xl md:block lg:h-[420px] lg:w-[420px]" />
      <div className="absolute bottom-[-25%] right-[-16%] hidden h-[400px] w-[400px] rounded-full bg-[#d8ead0]/40 blur-3xl md:block lg:h-[480px] lg:w-[480px]" />

      {/* Larger botanical background accents */}
      <div className="absolute left-[-4rem] top-10 hidden text-[11rem] leading-none text-[#a98bb8]/10 lg:block">
        ✿
      </div>
      <div className="absolute right-[-3rem] bottom-16 hidden text-[10rem] leading-none text-[#7d9b70]/10 lg:block">
        ❧
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 22, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.75rem] border-2 border-[#7d9b70]/70 bg-[#f8f0e8] px-6 py-12 text-center shadow-[0_18px_55px_rgba(76,51,88,0.08)] md:rounded-[3.5rem] md:px-12 md:py-16"
        >
          {/* Top accent lines */}
          <div className="absolute left-0 top-0 h-2 w-full bg-[#7d9b70]" />
          <div className="absolute left-0 top-2 h-2 w-full bg-[#8f6ca1]" />

          {/* Background botanical pattern */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-8 top-10 text-7xl text-[#8f6ca1]/15">
              ✿
            </div>
            <div className="absolute right-10 top-12 text-7xl text-[#7d9b70]/15">
              ❧
            </div>
            <div className="absolute bottom-10 left-12 text-6xl text-[#7d9b70]/15">
              ❧
            </div>
            <div className="absolute bottom-8 right-16 text-6xl text-[#8f6ca1]/15">
              ✿
            </div>

            <div className="absolute left-1/2 top-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8c6df]/60" />
            <div className="absolute left-1/2 top-1/2 h-[52%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8ead0]/80" />
          </div>

          {/* Side decorative circles */}
          <div className="absolute -left-12 top-12 h-44 w-44 rounded-full border border-[#a98bb8]/25 md:h-52 md:w-52" />
          <div className="absolute -right-14 bottom-10 h-48 w-48 rounded-full border border-[#7d9b70]/35 md:h-60 md:w-60" />

          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#7d9b70] bg-[#fffaf5] text-4xl text-[#8f6ca1] shadow-[0_12px_35px_rgba(76,51,88,0.1)]">
              ✿
            </div>

            <div className="mb-6 inline-block">
              <div className="relative inline-block">
                <span className="absolute -left-4 top-1/2 h-3 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />

                <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.38em] text-[#8f6ca1]">
                  Mission Statement
                </p>
              </div>
            </div>

            <h2 className="mx-auto max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-6xl">
              To support vitality through{" "}
              <span className="text-[#8f6ca1]">herbs</span>, whole foods, and a
              grounded lifestyle.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#6f5b75]">
              Purple Leaf Herbs helps nurture the connection between mind, body,
              and soul through simple, earth-rooted wellness.
            </p>

            <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-4">
              <span className="h-px flex-1 bg-[#8f6ca1]/45" />
              <span className="text-2xl text-[#7d9b70]">✦</span>
              <span className="h-px flex-1 bg-[#8f6ca1]/45" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;