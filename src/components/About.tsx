"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiX, FiBookOpen } from "react-icons/fi";
import ContactModal from "./ContactModal";

const founderDetails = [
  "Nutrition Herbalist",
  "Herbal Specialist",
  "Holistic Educator",
];

const About = () => {
  const [bioOpen, setBioOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = bioOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [bioOpen]);

  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden bg-[#f8f0e8] px-4 py-16 text-[#302133] md:py-20"
      >
        {/* Desktop-only atmosphere */}
        <div className="absolute left-[-20%] top-[-20%] hidden h-[460px] w-[460px] rounded-full bg-[#d9c1e5]/30 blur-3xl md:block lg:h-[560px] lg:w-[560px]" />
        <div className="absolute bottom-[-25%] right-[-20%] hidden h-[500px] w-[500px] rounded-full bg-[#d8ead0]/40 blur-3xl md:block lg:h-[620px] lg:w-[620px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Top row */}
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-12 flex flex-col gap-6 border-b-4 border-[#8f6ca1] pb-8 md:mb-14 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="mb-4 inline-block">
                <div className="relative inline-block">
                  <span className="absolute -left-3 top-1/2 h-3 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />
                  <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.38em] text-[#8f6ca1]">
                    Meet The Founder
                  </p>
                </div>
              </div>

              <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.06em] text-[#3b243f] md:text-6xl">
                Dina Brooke
              </h2>
            </div>
          </motion.div>

          {/* Editorial founder layout */}
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left */}
            <motion.div
              initial={{ x: -18, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="flex items-center gap-5">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[#7d9b70] bg-[#fffaf5] shadow-[0_10px_30px_rgba(76,51,88,0.1)] mt-4">
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
                    className="rounded-full border border-[#d8c6df]/80 bg-white/55 px-5 py-3 text-xs uppercase tracking-[0.22em] text-[#6f5b75] transition-colors duration-300 hover:border-[#7d9b70]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
            >
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6f5b75]">
                Dina Brooke is the creator of Purple Leaf Herbs. She has
                practiced a plant-based lifestyle for over 30 years and earned a
                degree in Holistic Healthcare. She specializes in Western
                Herbalism and Holistic Nutrition. After graduation Brooke served
                as an instructor in the holistic nutrition program at the
                college sharing her knowledge with students.
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6f5b75]">
                Brooke created Purple Leaf Herbs to help people approach natural
                wellness with more ease — through herbs, nutrition, and simple
                daily practices.
              </p>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-14 flex flex-col items-center gap-6"
          >
            <div className="flex w-full items-center gap-4">
              <span className="h-px flex-1 bg-[#8f6ca1]/45" />
              <span className="font-serif text-2xl text-[#7d9b70]">✦</span>
              <span className="h-px flex-1 bg-[#8f6ca1]/45" />
            </div>

            <button
              onClick={() => setBioOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-[#d8c6df]/80 bg-white/60 px-6 py-3 text-md font-medium text-[#5f6f54] shadow-[0_8px_24px_rgba(76,51,88,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7d9b70] hover:bg-white hover:text-[#3b243f]"
            >
              Read Brooke’s Full Story
              <FiBookOpen className="transition-transform duration-300  group-hover:-translate-y-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Bio Modal */}
      <AnimatePresence>
        {bioOpen && (
          <motion.div
            className="fixed inset-0 z-[999] h-dvh overflow-y-auto bg-[#2b1731]/60 px-4 py-5 md:py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close background */}
            <button
              onClick={() => setBioOpen(false)}
              className="fixed inset-0 h-full w-full cursor-default"
              aria-label="Close Brooke bio modal background"
            />

            {/* Fixed X */}
            <button
              onClick={() => setBioOpen(false)}
              className="fixed right-5 top-5 z-[1001] flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#7d9b70] bg-white text-[#3b243f] shadow-[0_12px_35px_rgba(43,23,49,0.22)] transition-all duration-300 hover:rotate-90 hover:bg-[#3b243f] hover:text-white md:right-8 md:top-8"
              aria-label="Close Brooke bio"
            >
              <FiX size={22} />
            </button>

            <motion.div
              initial={{ y: 28, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-10 mx-auto my-4 max-w-6xl overflow-hidden rounded-[2rem] border-2 border-[#7d9b70]/70 bg-[#fffaf5] shadow-[0_24px_80px_rgba(43,23,49,0.28)] md:my-0 md:rounded-[2.5rem]"
            >
              <div className="absolute left-0 top-0 z-20 h-2 w-full bg-[#7d9b70]" />
              <div className="absolute left-0 top-2 z-20 h-2 w-full bg-[#8f6ca1]" />

              <div className="grid pt-4 lg:grid-cols-[0.85fr_1.15fr]">
                {/* Image Side */}
                <div className="relative h-[260px] overflow-hidden bg-[#3b243f] sm:h-[360px] lg:h-auto lg:min-h-[680px]">
                  <Image
                    src="/assets/founder2.jpg"
                    alt="Brooke, founder of Purple Leaf Herbs"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                    style={{ objectPosition: "center 38%" }}
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b1731]/75 via-[#2b1731]/10 to-transparent" />

                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8ead0]">
                      Dina Brooke
                    </p>
                    <h3 className="font-serif text-4xl leading-tight md:text-5xl">
                      Brooke’s Story and Core Beliefs.
                    </h3>
                  </div>
                </div>

                {/* Bio Side */}
                <div className="relative overflow-hidden p-8 md:p-12 lg:p-14">
                  <div className="relative z-10">
                    <div className="mb-5 inline-block">
                      <div className="relative inline-block">
                        <span className="absolute -left-4 top-1/2 h-3 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />

                        <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.35em] text-[#8f6ca1]">
                          About Brooke
                        </p>
                      </div>
                    </div>

                    <h2 className="font-serif text-3xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-5xl">
                      My Story and Beliefs
                    </h2>

                    <div className="mt-8 space-y-6 text-base leading-8 text-[#6f5b75] md:text-md">
                      <p>
                        As a clinical herbalist and holistic nutrition
                        practitioner, Purple Leaf Herbs is dedicated to helping
                        people achieve optimal health and wellness through the
                        use of natural remedies and whole food nutrition. With a
                        deep understanding of the powerful healing properties of
                        plants and the ways in which food affects the body,
                        Brooke has dedicated her life to studying the art and
                        science of herbal medicine and holistic nutrition. This
                        journey began with a personal interest in natural health
                        and healing, which led her to pursue an education in
                        both clinical herbalism and holistic nutrition.
                      </p>
                      <p>
                        Today Brooke runs her own practice, where she works with
                        clients to develop personalized health plans that
                        address their unique needs and concerns. Through the use
                        of medicinal herbs and whole food nutrition, Brooke
                        helps clients achieve balance and harmony in all aspects
                        of their lives. Whether dealing with chronic pain,
                        stress, hormonal imbalances or other health concerns,
                        she is able to create customized solutions that address
                        the root cause of the issue.
                      </p>
                      <p>
                        With a holistic understanding of the ways in which
                        plants and food interact with the body, Brooke is able
                        to offer a range of nature-based remedies and health
                        solutions. From herbal tinctures and teas to dietary
                        recommendations and lifestyle changes, she works closely
                        with clients to help them achieve optimal health and
                        wellness.
                      </p>
                      <p>
                        As a respected member of the holistic health community,
                        Brooke is also committed to education and outreach. She
                        teaches classes on herbal medicine and holistic
                        nutrition and hosts workshops and events to promote the
                        importance of natural health and healing. Through her
                        practice and advocacy work, Brooke is helping to create
                        a world where people can access the healing power of
                        plants and live in harmony with their bodies and the
                        natural world.
                      </p>
                    </div>

                    <div className="mt-9 grid gap-3 sm:grid-cols-3">
                      {founderDetails.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-[#d8c6df]/80 bg-[#f8f0e8] px-4 py-4 text-center"
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d9b70]">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                      <ContactModal />

                      <button
                        onClick={() => setBioOpen(false)}
                        className="inline-flex items-center justify-center rounded-full border border-[#d8c6df] bg-white px-7 py-4 text-sm font-semibold text-[#3b243f] transition-all duration-300 hover:border-[#7d9b70]"
                      >
                        Back to Site
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
