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
    quote:
      "All living creatures are sparks from the radiation of God’s brilliance.",
    author: "Hildegard of Bingen",
  },
];

const testimonials = [
  {
    name: "Nicolle Bowen",
    role: "Wellness Client",
    text: "Brooke helped me slow down and understand what my body actually needed.",
  },
  {
    name: "Ana Bustos",
    role: "Nutrition Support",
    text: "The guidance felt personal and calming. I left with simple steps I could actually use.",
  },
  {
    name: "Isabel Leyva",
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
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
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
                <p className="font-serif text-2xl leading-tight text-[#3b243f] md:text-3xl">
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
        <div className="mx-auto mt-10 max-w-6xl">
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-8 text-center"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-[#8f6ca1]">
              Kind Words
            </p>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.05em] text-[#3b243f] md:text-5xl">
              Client Experiences
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 22, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.05, duration: 0.55, ease: "easeOut" }}
            className="relative mx-auto max-w-4xl"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[#d8c6df]/70 bg-[#fffaf5] shadow-[0_14px_40px_rgba(76,51,88,0.08)]">
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-[#7d9b70]" />
              <div className="absolute left-0 top-1.5 h-1.5 w-full bg-[#8f6ca1]" />


              <div className="relative z-10 p-7 text-center md:p-10">
                <div className="mx-auto  flex h-14 w-14 pt-6 items-center justify-center rounded-full border border-[#7d9b70]/60 bg-[#f8f0e8] font-serif text-7xl text-[#8f6ca1]">
                  “
                </div>

                <div className="relative min-h-[150px] md:min-h-[120px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={testimonialIndex}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                      <p className="mx-auto max-w-2xl font-serif text-2xl leading-tight text-[#3b243f] md:text-3xl">
                        “{testimonials[testimonialIndex].text}”
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mx-auto mt-7 flex max-w-sm items-center justify-center gap-3">
                  <span className="h-px flex-1 bg-[#8f6ca1]/35" />
                  <span className="text-xl text-[#7d9b70]">✦</span>
                  <span className="h-px flex-1 bg-[#8f6ca1]/35" />
                </div>

                <div className="mt-5">
                  <p className="font-serif text-xl text-[#3b243f]">
                    {testimonials[testimonialIndex].name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#7d9b70]">
                    {testimonials[testimonialIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={previousTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c6df] bg-white text-[#3b243f] shadow-[0_8px_22px_rgba(76,51,88,0.06)] transition-all duration-300 hover:border-[#7d9b70] hover:bg-[#f8f0e8]"
                aria-label="Previous testimonial"
              >
                <FiArrowLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      testimonialIndex === index
                        ? "w-7 bg-[#7d9b70]"
                        : "w-2 bg-[#3b243f]/25"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7d9b70] bg-[#3b243f] text-white shadow-[0_8px_22px_rgba(76,51,88,0.08)] transition-all duration-300 hover:bg-[#8f6ca1]"
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
