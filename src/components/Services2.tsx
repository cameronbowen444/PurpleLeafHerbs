"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import ContactModal from "./ContactModal";

const offerings = [
  {
    number: "01",
    title: "Natural Balance",
    text: "A simple balanced plan. We offer private sessions to identify where each person is on their health journey.",
    benefit:
      "After personalized sessions, you’ll become more confident making food-related decisions for your health needs.",
    image: "/assets/service-bal.jpg",
  },
  {
    number: "02",
    title: "Nutrition Coaching",
    text: "Guidance along your journey to help you stay on track. Each session is designed specifically to meet individual needs.",
    benefit:
      "This service helps individuals move toward healthy eating and living with realistic support.",
    image: "/assets/service-nut.jpg",
  },
  {
    number: "03",
    title: "Herbal Education",
    text: "Classes on the art of nature-based remedies and whole food cooking.",
    benefit:
      "Purple Leaf Herbs offers tools and techniques to help clients build a more balanced lifestyle.",
    image: "/assets/service-herb.jpg",
  },
  {
    number: "04",
    title: "Organic & Natural Products",
    text: "Herbal formulations designed for your specific health goals. All products are handcrafted just for you.",
    benefit:
      "Each client is carefully evaluated so the plan can be shaped around their individual needs.",
    image: "/assets/service-nat.jpg",
  },
  {
    number: "05",
    title: "Lifestyle & Stress Management",
    text: "Guidance and support for calming the mind and moving the body toward the healthiest version of you.",
    benefit:
      "This service supports a healthier lifestyle by focusing on the mind-body-spirit connection.",
    image: "/assets/service-life.jpg",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fffaf5] px-4 py-16 text-[#302133] md:py-20"
    >
      {/* Desktop-only atmosphere */}
      <div className="absolute left-[-18%] top-[-10%] hidden h-[440px] w-[440px] rounded-full bg-[#d9c1e5]/25 blur-3xl md:block lg:h-[560px] lg:w-[560px]" />
      <div className="absolute right-[-18%] bottom-[-20%] hidden h-[500px] w-[500px] rounded-full bg-[#d8ead0]/35 blur-3xl md:block lg:h-[620px] lg:w-[620px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 grid gap-8 border-b-4 border-[#8f6ca1] pb-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
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

            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.06em] text-[#3b243f] md:text-6xl">
              A Path to Your Most{" "}
              <span className="text-[#8f6ca1]">Vibrant Life</span>
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

        {/* Smaller Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                delay: index * 0.035,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="group overflow-hidden rounded-[1.75rem] border border-[#d8c6df]/60 bg-[#f8f0e8] shadow-[0_12px_35px_rgba(76,51,88,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#7d9b70]/70"
            >
              {/* Image top */}
              <div className="relative h-48 overflow-hidden sm:h-52">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2b1731]/30 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border-2 border-[#7d9b70] bg-[#fffaf5]/95 px-3.5 py-1.5 font-serif text-lg text-[#8f6ca1] shadow-[0_8px_20px_rgba(76,51,88,0.1)]">
                  {item.number}
                </span>
              </div>

              {/* Text bottom */}
              <div className="p-5 md:p-6">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8f6ca1]">
                  Purple Leaf Herbs
                </p>

                <h3 className="font-serif text-2xl leading-tight tracking-[-0.035em] text-[#3b243f] md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6f5b75]">
                  {item.text}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#6f5b75]">
                  {item.benefit}
                </p>

                <ContactModal
                  label="Ask about this"
                  className="group/link mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#8f6ca1] underline decoration-[#7d9b70] decoration-4 underline-offset-8 transition-colors duration-300 hover:text-[#3b243f]"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.05, duration: 0.55, ease: "easeOut" }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[2rem] border-2 border-[#7d9b70]/70 bg-white/80 px-6 py-5 text-center shadow-[0_12px_35px_rgba(76,51,88,0.06)] md:flex-row md:rounded-full md:text-left"
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