"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fffaf5] px-4 pt-32 text-[#302133]"
    >
      {/* Soft organic background */}
      <div className="absolute left-[-18%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#dfc8e9]/45 blur-[130px]" />
      <div className="absolute bottom-[-22%] right-[-16%] h-[600px] w-[600px] rounded-full bg-[#d8ead0]/70 blur-[150px]" />

      {/* Thin decorative botanical lines */}
      <div className="absolute left-8 top-40 hidden h-72 w-px bg-gradient-to-b from-transparent via-[#bca0c8]/60 to-transparent lg:block" />
      <div className="absolute bottom-20 right-10 hidden h-72 w-px bg-gradient-to-b from-transparent via-[#bca0c8]/50 to-transparent lg:block" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
        {/* Left */}
        <div className="max-w-4xl text-center lg:text-left">
          <motion.p
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#8b6a99]"
          >
            Sacred Plant Secrets From The Earth
          </motion.p>

          <motion.h1
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.08, duration: 0.85, ease: "easeOut" }}
            className="font-serif text-6xl leading-[0.95] tracking-[-0.06em] text-[#3b243f] sm:text-7xl lg:text-8xl"
          >
            Healing feels better when it feels{" "}
            <span className="relative inline-block text-[#a98bb8]">
              natural.
              <span className="absolute -bottom-2 left-2 -z-10 h-3 w-[92%] rounded-full bg-[#d8ead0]/90" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.18, duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-7 max-w-xl text-lg leading-8 text-[#6f5b75] lg:mx-0"
          >
            Herbal guidance, nutrition support, and simple rituals for a calmer,
            more grounded way of living.
          </motion.p>

          <motion.div
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.75, ease: "easeOut" }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#3b243f] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(59,36,63,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a98bb8]"
            >
              Contact Brooke
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="#services"
              className="text-sm font-semibold text-[#6f5b75] underline decoration-[#d8ead0] decoration-4 underline-offset-8 transition-colors duration-300 hover:text-[#3b243f]"
            >
              View services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="mt-16 hidden items-center gap-5 text-left lg:flex"
          >
            <div className="h-px w-16 bg-[#cdb7d7]" />
            <p className="max-w-sm font-serif text-2xl leading-8 text-[#3b243f]/80">
              Rooted in plants. Guided by balance. Made for real life.
            </p>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 35, opacity: 0, rotate: 1.5 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.18, duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="absolute -left-8 top-10 z-20 hidden rounded-full bg-[#fffaf5] px-5 py-3 font-serif text-xl text-[#3b243f] shadow-[0_15px_50px_rgba(76,51,88,0.12)] md:block">
            Herbal Wellness
          </div>

          <div className="absolute -right-5 bottom-16 z-20 hidden rounded-full bg-[#3b243f] px-5 py-3 text-xs uppercase tracking-[0.28em] text-white shadow-[0_15px_50px_rgba(59,36,63,0.22)] md:block">
            Naturally Grounded
          </div>

          <div className="relative h-[440px] overflow-hidden rounded-t-full rounded-b-[2rem] shadow-[0_30px_90px_rgba(76,51,88,0.18)] sm:h-[560px]">
            <Image
              src="/assets/hero-herb.jpg"
              alt="Herbs and natural wellness ingredients"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2b1731]/30 via-transparent to-transparent" />
          </div>

          <div className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-3 text-center">
            <span className="h-px flex-1 bg-[#d8c6df]" />
            <span className="font-serif text-2xl text-[#a98bb8]">✦</span>
            <span className="h-px flex-1 bg-[#d8c6df]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;