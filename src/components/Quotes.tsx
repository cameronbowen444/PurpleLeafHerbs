"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const inspirations = [
  {
    quote: "Let food be thy medicine and medicine be thy food.",
    author: "Hippocrates",
  },
  {
    quote: "Every creature is a glittering mirror of Divinity.",
    author: "Hildegard of Bingen",
  },
  {
    quote: "All living creatures are sparks from the radiation of God’s brilliance.",
    author: "Hildegard of Bingen",
  },
];

const testimonials = [
  {
    name: "Client Story",
    role: "Wellness Client",
    text: "Brooke helped me slow down and understand what my body actually needed.",
  },
  {
    name: "Client Story",
    role: "Nutrition Support",
    text: "The guidance felt personal and calming. I left with simple steps I could actually use.",
  },
  {
    name: "Client Story",
    role: "Herbal Education",
    text: "Purple Leaf Herbs gave me a new way to think about food, herbs, and balance.",
  },
];

const Quotes = () => {
  const [inspirationIndex, setInspirationIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setInspirationIndex((prev) => (prev + 1) % inspirations.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const previousIndex =
    (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (testimonialIndex + 1) % testimonials.length;

  return (
    <section
      id="quotes"
      className="relative overflow-hidden bg-[#f8f0e8] px-4 py-14 text-[#302133] md:py-16"
    >
      {/* Desktop-only atmosphere */}
      <div className="absolute left-[-18%] top-[-20%] hidden h-[420px] w-[420px] rounded-full bg-[#d9c1e5]/25 blur-3xl md:block lg:h-[520px] lg:w-[520px]" />
      <div className="absolute bottom-[-25%] right-[-18%] hidden h-[460px] w-[460px] rounded-full bg-[#d8ead0]/35 blur-3xl md:block lg:h-[560px] lg:w-[560px]" />

      {/* Botanical accents */}
      <div className="absolute left-[-3rem] top-16 hidden text-[8rem] leading-none text-[#a98bb8]/10 lg:block">
        ✿
      </div>
      <div className="absolute right-[-2rem] bottom-20 hidden text-[8rem] leading-none text-[#7d9b70]/10 lg:block">
        ❧
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Inspiration headline */}
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-5xl border-b-4 border-[#8f6ca1] pb-8 text-center"
        >
          <div className="mb-4 inline-block">
            <div className="relative inline-block">
              <span className="absolute -left-3 top-1/2 h-3 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />
              <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.38em] text-[#8f6ca1]">
                Inspiration
              </p>
            </div>
          </div>

          <div className="relative mx-auto min-h-[72px] max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={inspirationIndex}
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 12, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="font-serif text-2xl leading-tight text-[#3b243f] md:text-4xl">
                  “{inspirations[inspirationIndex].quote}”
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#7d9b70]">
                  {inspirations[inspirationIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mx-auto mt-12 max-w-7xl md:mt-14">
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-10 text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#8f6ca1]">
              Kind Words
            </p>

            <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.06em] text-[#3b243f] md:text-7xl">
              Testimonials
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#6f5b75]">
              Gentle words from people who found more rhythm, clarity, and calm.
            </p>
          </motion.div>

          {/* Carousel stage */}
          <motion.div
            initial={{ y: 22, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.05, duration: 0.55, ease: "easeOut" }}
            className="relative mx-auto min-h-[430px] max-w-6xl md:min-h-[390px]"
          >
            {/* Left card */}
            <div className="absolute left-0 top-20 hidden w-[34%] rounded-[2rem] border border-[#d8c6df]/70 bg-white/75 p-8 text-center shadow-[0_12px_35px_rgba(76,51,88,0.06)] lg:block">
              <p className="mx-auto max-w-sm text-sm leading-7 text-[#6f5b75]">
                “{testimonials[previousIndex].text}”
              </p>

              <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#7d9b70] bg-[#f8f0e8] font-serif text-xl text-[#8f6ca1]">
                ✿
              </div>

              <p className="mt-4 font-serif text-lg text-[#3b243f]">
                {testimonials[previousIndex].name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#7d9b70]">
                {testimonials[previousIndex].role}
              </p>
            </div>

            {/* Right card */}
            <div className="absolute right-0 top-20 hidden w-[34%] rounded-[2rem] border border-[#d8c6df]/70 bg-white/75 p-8 text-center shadow-[0_12px_35px_rgba(76,51,88,0.06)] lg:block">
              <p className="mx-auto max-w-sm text-sm leading-7 text-[#6f5b75]">
                “{testimonials[nextIndex].text}”
              </p>

              <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#7d9b70] bg-[#f8f0e8] font-serif text-xl text-[#8f6ca1]">
                ❧
              </div>

              <p className="mt-4 font-serif text-lg text-[#3b243f]">
                {testimonials[nextIndex].name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#7d9b70]">
                {testimonials[nextIndex].role}
              </p>
            </div>

            {/* Center featured card */}
            <div className="relative z-10 mx-auto w-full max-w-2xl rounded-[2.5rem] border-2 border-[#7d9b70] bg-[#3b243f] p-8 text-center text-white shadow-[0_22px_70px_rgba(59,36,63,0.22)] md:p-10">
              <div className="absolute left-0 top-0 h-2 w-full rounded-t-[2.5rem] bg-[#7d9b70]" />
              <div className="absolute left-0 top-2 h-2 w-full bg-[#8f6ca1]" />

              <p className="font-serif text-7xl leading-none text-white/20">
                “
              </p>

              <div className="relative min-h-[160px] md:min-h-[150px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIndex}
                    initial={{ x: 26, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -26, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <p className="max-w-xl font-serif text-3xl leading-tight text-white md:text-4xl">
                      “{testimonials[testimonialIndex].text}”
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#7d9b70] bg-[#fffaf5] font-serif text-2xl text-[#8f6ca1] shadow-[0_12px_35px_rgba(0,0,0,0.14)]">
                ✿
              </div>

              <p className="mt-4 font-serif text-xl text-white">
                {testimonials[testimonialIndex].name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[#d8ead0]">
                {testimonials[testimonialIndex].role}
              </p>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={previousTestimonial}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c6df] bg-white text-[#3b243f] transition-all duration-300 hover:bg-[#3b243f] hover:text-white"
                aria-label="Previous testimonial"
              >
                <FiArrowLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      testimonialIndex === index
                        ? "w-8 bg-[#7d9b70]"
                        : "w-2.5 bg-[#3b243f]/25"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#7d9b70] bg-[#3b243f] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8f6ca1]"
                aria-label="Next testimonial"
              >
                <FiArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;