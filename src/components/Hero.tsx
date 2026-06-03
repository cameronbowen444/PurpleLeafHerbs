import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import ContactModal from "./ContactModal";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fffaf5] px-4 pt-10 text-[#302133]"
    >
      {/* Desktop-only soft background glows */}
      <div className="absolute left-[-18%] top-[-10%] hidden h-[420px] w-[420px] rounded-full bg-[#d9c1e5]/35 blur-3xl md:block lg:h-[520px] lg:w-[520px]" />
      <div className="absolute bottom-[-22%] right-[-16%] hidden h-[460px] w-[460px] rounded-full bg-[#d8ead0]/45 blur-3xl md:block lg:h-[600px] lg:w-[600px]" />

      {/* Botanical accents */}
      <div className="absolute left-8 top-40 hidden h-72 w-px bg-gradient-to-b from-transparent via-[#8f6ca1]/50 to-transparent lg:block" />
      <div className="absolute bottom-20 right-10 hidden h-72 w-px bg-gradient-to-b from-transparent via-[#7d9b70]/45 to-transparent lg:block" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        {/* Left */}
        <div className="max-w-4xl animate-[fadeUp_0.7s_ease-out_both] text-center lg:text-left">
          <div className="mb-6 inline-block">
            <div className="relative inline-block">
              <span className="absolute -left-4 top-1/2 h-3 w-[110%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />

              <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.35em] text-[#8f6ca1] ">
                Herbal Guidance
              </p>
            </div>
          </div>

          <h1 className="font-serif text-6xl leading-[0.95] tracking-[-0.06em] text-[#3b243f] text-6xl">
            Guided wellness journey with{" "}
            <span className="relative inline-block text-[#8f6ca1]">
              herbal support.
              <span className="absolute -bottom-2 left-2 -z-10 h-3 w-[92%] rounded-full bg-[#d8ead0]/90" />
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-[#6f5b75] lg:mx-0">
            Nutrition Herbalist and Herbal Specialist
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 md:flex-row lg:justify-start ">
            <ContactModal
              label="Contact Brooke"
            />

            <Link
              href="#services"
              className="text-sm font-semibold text-[#6f5b75] underline decoration-[#7d9b70] decoration-4 underline-offset-8 transition-colors duration-300 hover:text-[#3b243f]"
            >
              View services
            </Link>
          </div>

          <div className="mt-16 hidden items-center gap-5 text-left lg:flex">
            <div className="h-px w-16 bg-gradient-to-r from-[#8f6ca1] to-[#7d9b70]" />

            <p className="max-w-sm font-serif text-xl leading-8 text-[#3b243f]/80">
              Personal guidance rooted in herbs, whole foods, and everyday
              balance.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-[520px] animate-[fadeUp_0.85s_ease-out_0.12s_both]">
          <div className="relative h-[420px] overflow-hidden rounded-t-full rounded-b-[2rem] border border-[#d8c6df]/70 shadow-[0_20px_60px_rgba(76,51,88,0.14)] sm:h-[560px]">
            <Image
              src="/assets/hero.jpg"
              alt="Herbs and natural wellness ingredients"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2b1731]/25 via-transparent to-transparent" />
          </div>

          <div className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-3 text-center">
            <span className="h-px flex-1 bg-[#8f6ca1]/45" />
            <span className="font-serif text-2xl text-[#7d9b70]">✦</span>
            <span className="h-px flex-1 bg-[#8f6ca1]/45" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
