"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiHerbsBundle } from "react-icons/gi";

const Mission = () => {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-[#fffaf5] px-4 py-16 text-[#302133] md:py-20"
    >
      {/* Desktop-only background glow */}
      <div className="absolute left-[-16%] top-[-20%] hidden h-[360px] w-[360px] rounded-full bg-[#d9c1e5]/30 blur-3xl md:block lg:h-[420px] lg:w-[420px]" />
      <div className="absolute bottom-[-25%] right-[-16%] hidden h-[400px] w-[400px] rounded-full bg-[#d8ead0]/40 blur-3xl md:block lg:h-[480px] lg:w-[480px]" />

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

          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="relative mx-auto mb-2 h-20 w-20 overflow-hidden rounded-2xl bg-[#fffaf5] shadow-[0_12px_35px_rgba(76,51,88,0.1)]">
              <Image
                src="/assets/logo-4.png"
                alt="Purple Leaf Herbs logo"
                fill
                sizes="70px"
                className="object-cover"
              />
            </div>

            <div className="mb-6 inline-block">
              <div className="relative inline-block">
                <span className="absolute -left-4 top-1/2 h-3 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />

                <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.48em] text-[#8f6ca1]">
                  Mission Statement
                </p>
              </div>
            </div>

            <h2 className="mx-auto max-w-5xl font-serif text-3xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-4xl">
              To improve and maintain the highest state of health and vitality by supporting the resilience of mind, body, soul connection; utilizing herbs, whole food nutrients, and a healthy lifestyle.
              
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
