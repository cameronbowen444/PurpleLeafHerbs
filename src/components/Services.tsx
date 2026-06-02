"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const offerings = [
  {
    number: "01",
    title: "Natural Balance",
    text: "Gentle support for creating a more balanced, grounded way of living.",
    image: "/assets/service-balance.jpg",
  },
  {
    number: "02",
    title: "Nutrition Coaching",
    text: "Simple food guidance built around your body, lifestyle, and rhythm.",
    image: "/assets/service-nutrition.jpg",
  },
  {
    number: "03",
    title: "Herbal Education",
    text: "Learn how plants, herbs, and natural remedies can support everyday wellness.",
    image: "/assets/service-herbs.jpg",
  },
  {
    number: "04",
    title: "Organic & Natural Products",
    text: "Earth-rooted herbal offerings made with care, intention, and plant wisdom.",
    image: "/assets/service-products.jpg",
  },
  {
    number: "05",
    title: "Lifestyle & Stress Support",
    text: "Soft, realistic practices for rest, calm, and a healthier daily flow.",
    image: "/assets/service-lifestyle.jpg",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fffaf5] px-4 py-24 text-[#302133] md:py-28"
    >
      {/* Desktop-only atmosphere */}
      <div className="absolute left-[-18%] top-[-10%] hidden h-[440px] w-[440px] rounded-full bg-[#d9c1e5]/25 blur-3xl md:block lg:h-[560px] lg:w-[560px]" />
      <div className="absolute right-[-18%] bottom-[-20%] hidden h-[500px] w-[500px] rounded-full bg-[#d8ead0]/35 blur-3xl md:block lg:h-[620px] lg:w-[620px]" />

      {/* Botanical accents */}
      <div className="absolute left-[-3rem] top-24 hidden text-[8rem] leading-none text-[#a98bb8]/10 lg:block">
        ✿
      </div>
      <div className="absolute right-[-2rem] bottom-28 hidden text-[8rem] leading-none text-[#7d9b70]/10 lg:block">
        ❧
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 grid gap-8 border-b-4 border-[#8f6ca1] pb-10 md:mb-20 md:pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mb-5 inline-block">
              <div className="relative inline-block">
                <span className="absolute -left-3 top-1/2 h-3 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />
                <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.38em] text-[#8f6ca1]">
                  What We Offer
                </p>
              </div>
            </div>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.06em] text-[#3b243f] md:text-7xl">
              A softer path to{" "}
              <span className="text-[#8f6ca1]">wellness.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.05, duration: 0.55, ease: "easeOut" }}
            className="max-w-xl text-lg leading-8 text-[#6f5b75] lg:ml-auto"
          >
            Support through food, herbs, education, and daily rituals that feel
            simple, personal, and natural.
          </motion.p>
        </div>

        {/* Offerings */}
        <div className="space-y-8 md:space-y-10">
          {offerings.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={item.title}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  delay: index * 0.035,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                className={`group grid overflow-hidden rounded-[2rem] border border-[#d8c6df]/60 bg-[#f8f0e8] shadow-[0_14px_45px_rgba(76,51,88,0.07)] md:rounded-[2.5rem] lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-[300px] overflow-hidden sm:h-[340px] lg:h-[440px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b1731]/30 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border-2 border-[#7d9b70] bg-[#fffaf5]/95 px-5 py-2 font-serif text-2xl text-[#8f6ca1] shadow-[0_10px_25px_rgba(76,51,88,0.1)] md:left-6 md:top-6">
                    {item.number}
                  </span>
                </div>

                {/* Text */}
                <div className="relative flex min-h-[300px] flex-col justify-center p-7 md:p-12 lg:min-h-[440px] lg:p-14">
                  <div className="absolute right-8 top-8 hidden font-serif text-7xl text-[#7d9b70]/20 lg:block">
                    ✦
                  </div>

                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6ca1]">
                    Purple Leaf Herbs
                  </p>

                  <h3 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-6xl">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-lg text-lg leading-8 text-[#6f5b75]">
                    {item.text}
                  </p>

                  <Link
                    href="#contact"
                    className="group/link mt-9 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#8f6ca1] underline decoration-[#7d9b70] decoration-4 underline-offset-8 transition-colors duration-300 hover:text-[#3b243f]"
                  >
                    Ask about this
                    <FiArrowUpRight className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.05, duration: 0.55, ease: "easeOut" }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[2rem] border-2 border-[#7d9b70]/70 bg-white/80 px-6 py-6 text-center shadow-[0_12px_35px_rgba(76,51,88,0.06)] md:mt-16 md:flex-row md:rounded-full md:py-5 md:text-left"
        >
          <p className="font-serif text-2xl text-[#3b243f]">
            Not sure which service fits best?
          </p>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[#7d9b70] bg-[#3b243f] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8f6ca1]"
          >
            Ask Brooke
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;