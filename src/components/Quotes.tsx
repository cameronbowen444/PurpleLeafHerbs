"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const topQuotes = [
  {
    quote: "Let food be thy medicine and medicine be thy food.",
    author: "Hippocrates",
  },
  {
    quote: "Every creature is a glittering mirror of Divinity.",
    author: "Hildegard of Bingen",
  },
  {
    quote:
      "All living creatures are sparks from the radiation of God’s brilliance.",
    author: "Hildegard of Bingen",
  },
];

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
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % topQuotes.length);
    }, 4500);

    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      clearInterval(quoteTimer);
      clearInterval(testimonialTimer);
    };
  }, []);

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
      className="relative overflow-hidden bg-[#f8f0e8] px-4 py-24 text-[#302133]"
    >
      <div className="absolute left-[-18%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#d9c1e5]/30 blur-[150px]" />
      <div className="absolute bottom-[-25%] right-[-18%] h-[560px] w-[560px] rounded-full bg-[#d8ead0]/55 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Thin Inspiration Strip */}
        <motion.div
          initial={{ y: -22, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-6xl border-y border-[#d8c6df]/70 py-10 text-center"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.38em] text-[#8b6a99]">
            Inspiration
          </p>

          <div className="relative min-h-[86px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIndex}
                initial={{ y: -14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 14, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="mx-auto max-w-4xl font-serif text-2xl leading-tight text-[#3b243f] md:text-4xl">
                  “{topQuotes[quoteIndex].quote}”
                </p>

                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#8b6a99]">
                  {topQuotes[quoteIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mx-auto mt-20 max-w-6xl">
          <motion.div
            initial={{ y: 22, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
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
            initial={{ y: 26, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.08, duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[3rem] border border-[#d8c6df]/70 bg-[#fffaf5]/70 p-6 shadow-[0_24px_80px_rgba(76,51,88,0.08)] backdrop-blur-xl md:p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Left mini list */}
              <div className="hidden rounded-[2.3rem] bg-[#3b243f] p-8 text-white lg:block">
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
              <div className="relative min-h-[300px] rounded-[2.3rem] bg-white/55 p-8 md:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIndex}
                    initial={{ x: 28, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -28, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
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