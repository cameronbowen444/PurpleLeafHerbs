"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const topQuote = {
  quote: "Let food be thy medicine and medicine be thy food.",
  author: "Hippocrates",
};

const testimonials = [
  {
    name: "Client Story",
    text: "Brooke helped me slow down and understand what my body actually needed.",
  },
  {
    name: "Client Story",
    text: "The guidance felt personal and calming. I left with simple steps I could actually use.",
  },
  {
    name: "Client Story",
    text: "Purple Leaf Herbs gave me a new way to think about food, herbs, and balance.",
  },
];

const Quotes = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="quotes"
      className="relative overflow-hidden bg-[#f8f0e8] px-4 py-20 text-[#302133] md:py-24"
    >
      {/* Desktop-only atmosphere */}
      <div className="absolute left-[-18%] top-[-20%] hidden h-[420px] w-[420px] rounded-full bg-[#d9c1e5]/25 blur-3xl md:block lg:h-[520px] lg:w-[520px]" />
      <div className="absolute bottom-[-25%] right-[-18%] hidden h-[460px] w-[460px] rounded-full bg-[#d8ead0]/40 blur-3xl md:block lg:h-[560px] lg:w-[560px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Thin Inspiration Strip */}
        <motion.div
          initial={{ y: -18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-6xl border-y border-[#d8c6df]/70 py-8 text-center md:py-10"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.38em] text-[#8b6a99]">
            Inspiration
          </p>

          <p className="mx-auto max-w-4xl font-serif text-2xl leading-tight text-[#3b243f] md:text-4xl">
            “{topQuote.quote}”
          </p>

          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#8b6a99]">
            {topQuote.author}
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mx-auto mt-16 max-w-6xl md:mt-20">
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.38em] text-[#8b6a99]">
                Kind Words
              </p>

              <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.06em] text-[#3b243f] md:text-7xl">
                Reflections.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-[#6f5b75]">
              Gentle words from people who found more rhythm, clarity, and calm.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 22, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.05, duration: 0.55, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2.5rem] border border-[#d8c6df]/70 bg-[#fffaf5]/85 p-5 shadow-[0_14px_45px_rgba(76,51,88,0.07)] md:rounded-[3rem] md:p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Left mini list */}
              <div className="hidden rounded-[2rem] bg-[#3b243f] p-8 text-white lg:block">
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                  Testimonials
                </p>

                <p className="mt-8 font-serif text-4xl leading-tight">
                  Wellness can feel calm, personal, and beautifully simple.
                </p>

                <div className="mt-10 flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setTestimonialIndex(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        testimonialIndex === index
                          ? "w-8 bg-white"
                          : "w-2.5 bg-white/30"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Sliding testimonial */}
              <div className="relative min-h-[280px] rounded-[2rem] bg-white/65 p-8 md:min-h-[300px] md:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIndex}
                    initial={{ x: 22, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -22, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col justify-center p-8 md:p-10"
                  >
                    <p className="font-serif text-3xl leading-tight text-[#3b243f] md:text-5xl">
                      “{testimonials[testimonialIndex].text}”
                    </p>

                    <p className="mt-8 text-xs uppercase tracking-[0.28em] text-[#8b6a99]">
                      {testimonials[testimonialIndex].name}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom controls */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2 lg:hidden">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      testimonialIndex === index
                        ? "w-8 bg-[#3b243f]"
                        : "w-2.5 bg-[#3b243f]/25"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="ml-auto flex gap-3">
                <button
                  onClick={previousTestimonial}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c6df] text-[#3b243f] transition-all duration-300 hover:bg-[#3b243f] hover:text-white"
                  aria-label="Previous testimonial"
                >
                  <FiArrowLeft />
                </button>

                <button
                  onClick={nextTestimonial}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3b243f] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a98bb8]"
                  aria-label="Next testimonial"
                >
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;