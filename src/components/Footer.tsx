import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Mission", href: "/#mission" },
  { label: "Quotes", href: "/#quotes" },
  { label: "Blog", href: "/blog" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#2b1731] px-4 py-14 text-white">
      {/* Desktop-only glow effects */}
      <div className="absolute left-[-10%] top-[-20%] hidden h-80 w-80 rounded-full bg-[#a98bb8]/25 blur-3xl md:block" />
      <div className="absolute bottom-[-25%] right-[-10%] hidden h-96 w-96 rounded-full bg-[#d8ead0]/15 blur-3xl md:block" />

      {/* Botanical accents */}
      <div className="pointer-events-none absolute left-[-3rem] top-12 hidden text-[9rem] leading-none text-[#a98bb8]/10 lg:block">
        ✿
      </div>
      <div className="pointer-events-none absolute right-[-2rem] bottom-12 hidden text-[8rem] leading-none text-[#7d9b70]/10 lg:block">
        ❧
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative grid gap-10 overflow-hidden rounded-[2.5rem] border-2 border-[#7d9b70]/60 bg-white/[0.04] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.18)] md:rounded-[3rem] md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Top accent lines */}
          <div className="absolute left-0 top-0 h-2 w-full bg-[#7d9b70]" />
          <div className="absolute left-0 top-2 h-2 w-full bg-[#8f6ca1]" />

          {/* Brand */}
          <div className="relative z-10">
            <Link href="/#home" className="inline-flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#7d9b70] bg-white shadow-lg">
                <Image
                  src="/assets/logo.jpg"
                  alt="Purple Leaf Herbs logo"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-serif text-2xl">Purple Leaf Herbs</p>

                <div className="relative mt-1 inline-block">
                  <span className="absolute -left-2 top-1/2 h-2 w-[108%] -translate-y-1/2 rounded-full bg-[#d8ead0]/20" />
                  <p className="relative z-10 text-xs uppercase tracking-[0.28em] text-[#d8ead0]">
                    Sacred Plant Secrets
                  </p>
                </div>
              </div>
            </Link>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/65">
              Herbal education, nutrition coaching, plant-centered blog notes,
              and gentle lifestyle support rooted in nature, balance, and
              everyday wellness.
            </p>

            <a
              href="mailto:brooke@purpleleafherbs.com"
              className="group mt-7 inline-flex items-center gap-2 rounded-full border-2 border-[#7d9b70] bg-white px-6 py-3 text-sm font-semibold text-[#3b243f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fffaf5]"
            >
              <FiMail />
              brooke@purpleleafherbs.com
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Links */}
          <div className="relative z-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#d8ead0]">
                Explore
              </p>

              <div className="grid gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70 transition-all duration-300 hover:border-[#7d9b70]/70 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                    <FiArrowUpRight className="opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#d8ead0] group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#d8ead0]">
                Start Here
              </p>

              <div className="rounded-[2rem] border border-[#7d9b70]/40 bg-white/[0.04] p-5">
                <p className="font-serif text-2xl leading-tight">
                  Blog notes, promotions, and simple plant-centered guidance.
                </p>

                <p className="mt-4 text-sm leading-6 text-white/55">
                  Read the latest posts or reach out to Brooke with a question
                  about herbs, nutrition, or natural wellness.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-3 hover:text-[#d8ead0]"
                  >
                    Visit Blog
                    <FiArrowUpRight />
                  </Link>

                  <a
                    href="mailto:brooke@purpleleafherbs.com"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-all duration-300 hover:gap-3 hover:text-white"
                  >
                    Email Brooke
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-xs text-white/35 md:flex-row">
          <p>
            © {new Date().getFullYear()} Purple Leaf Herbs. All rights reserved.
          </p>

          <p>
            <span className="text-[#d8ead0]/70">Holistic wellness</span> rooted
            in the wisdom of plants.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;