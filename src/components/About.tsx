"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const founderDetails = ["Nutrition Coach", "Herbalist", "Holistic Educator"];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8f0e8] px-4 py-24 text-[#302133] md:py-28"
    >
      {/* Lighter atmosphere: hidden on mobile */}
      <div className="absolute left-[-20%] top-[-20%] hidden h-[460px] w-[460px] rounded-full bg-[#d9c1e5]/30 blur-3xl md:block lg:h-[560px] lg:w-[560px]" />
      <div className="absolute bottom-[-25%] right-[-20%] hidden h-[500px] w-[500px] rounded-full bg-[#d8ead0]/45 blur-3xl md:block lg:h-[620px] lg:w-[620px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top row */}
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-14 flex flex-col gap-6 border-b border-[#d8c6df]/70 pb-8 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.38em] text-[#8b6a99]">
              Meet The Founder
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.06em] text-[#3b243f] md:text-7xl">
              Brooke
            </h2>
          </div>

          <Link
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#3b243f] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(59,36,63,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a98bb8]"
          >
            Connect
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        {/* Editorial founder layout */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: small founder identity */}
          <motion.div
            initial={{ x: -18, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-[#fffaf5] shadow-[0_10px_30px_rgba(76,51,88,0.1)]">
                <Image
                  src="/assets/founder.jpg"
                  alt="Brooke, founder of Purple Leaf Herbs"
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
                  className="rounded-full border border-[#d8c6df]/80 bg-white/55 px-5 py-3 text-xs uppercase tracking-[0.22em] text-[#6f5b75]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: statement */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
          >
            <p className="max-w-4xl font-serif text-4xl leading-tight tracking-[-0.035em] text-[#3b243f] md:text-6xl">
              “Wellness should feel personal, peaceful, and connected to the
              life you actually live.”
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6f5b75]">
              Brooke created Purple Leaf Herbs to help people approach natural
              wellness with more ease — through herbs, nutrition, and simple
              daily practices.
            </p>
          </motion.div>
        </div>

        {/* Bottom tiny line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.1, duration: 0.6 }}
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