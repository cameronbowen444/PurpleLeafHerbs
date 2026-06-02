"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const founderDetails = [
  "Nutrition Coach",
  "Herbalist",
  "Holistic Educator",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8f0e8] px-4 py-28 text-[#302133]"
    >
      {/* Atmosphere */}
      <div className="absolute left-[-20%] top-[-20%] h-[560px] w-[560px] rounded-full bg-[#d9c1e5]/35 blur-[160px]" />
      <div className="absolute bottom-[-25%] right-[-20%] h-[620px] w-[620px] rounded-full bg-[#d8ead0]/60 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top row */}
        <motion.div
          initial={{ y: 22, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 flex flex-col gap-6 border-b border-[#d8c6df]/70 pb-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.38em] text-[#8b6a99]">
              Meet The Founder
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.06em] text-[#3b243f] md:text-7xl">
              Dina Brooke
            </h2>
          </div>

          <Link
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#3b243f] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(59,36,63,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a98bb8]"
          >
            Connect
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        {/* Editorial founder layout */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: small founder identity */}
          <motion.div
            initial={{ x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5">
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-[#fffaf5] shadow-[0_18px_50px_rgba(76,51,88,0.13)]">
                <Image
                  src="/assets/founder.png"
                  alt="Dina Brooke, founder of Purple Leaf Herbs"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-serif text-2xl text-[#3b243f]">
                  Founder of Purple Leaf Herbs
                </p>
                <p className="mt-1 text-sm text-[#6f5b75]">
                  Plant wisdom, food, and gentle guidance.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {founderDetails.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d8c6df]/80 bg-white/35 px-5 py-3 text-xs uppercase tracking-[0.22em] text-[#6f5b75] backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: statement */}
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.08, duration: 0.8, ease: "easeOut" }}
          >
            <p className="max-w-4xl font-serif text-4xl leading-tight tracking-[-0.035em] text-[#3b243f] md:text-6xl">
              “Wellness should feel personal, peaceful, and connected to the
              life you actually live.”
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6f5b75]">
              Dina created Purple Leaf Herbs to help people approach natural
              wellness with more ease — through herbs, nutrition, and simple
              daily practices.
            </p>
          </motion.div>
        </div>

        {/* Bottom tiny line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-20 flex items-center gap-4"
        >
          <span className="h-px flex-1 bg-[#d8c6df]" />
          <span className="font-serif text-2xl text-[#a98bb8]">✦</span>
          <span className="h-px flex-1 bg-[#d8c6df]" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;