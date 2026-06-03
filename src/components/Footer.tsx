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
    <footer className="relative overflow-hidden bg-[#502a5c] px-4 py-10 text-white">
      {/* Desktop-only glow effects */}
      <div className="absolute left-[-10%] top-[-20%] hidden h-72 w-72 rounded-full bg-[#a98bb8]/20 blur-3xl md:block" />
      <div className="absolute bottom-[-25%] right-[-10%] hidden h-80 w-80 rounded-full bg-[#d8ead0]/12 blur-3xl md:block" />

      {/* Botanical accents */}
      <div className="pointer-events-none absolute left-[-3rem] top-10 hidden text-[7rem] leading-none text-[#a98bb8]/8 lg:block">
        ✿
      </div>
      <div className="pointer-events-none absolute right-[-2rem] bottom-10 hidden text-[7rem] leading-none text-[#7d9b70]/8 lg:block">
        ❧
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative grid gap-8 overflow-hidden rounded-[2rem] border border-[#7d9b70]/50 bg-white/[0.04] p-6 shadow-[0_14px_45px_rgba(0,0,0,0.16)] md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Top accent lines */}
          <div className="absolute left-0 top-0 h-1.5 w-full bg-[#7d9b70]" />
          <div className="absolute left-0 top-1.5 h-1.5 w-full bg-[#8f6ca1]" />

          {/* Brand */}
          <div className="relative z-10">
            <Link href="/#home" className="inline-flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#7d9b70] bg-white shadow-md">
                <Image
                  src="/assets/logo-4.png"
                  alt="Purple Leaf Herbs logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-serif text-xl">Purple Leaf Herbs</p>

                <div className="relative mt-1 inline-block">
                  <span className="absolute -left-2 top-1/2 h-2 w-[108%] -translate-y-1/2 rounded-full bg-[#d8ead0]/20" />
                  <p className="relative z-10 text-[10px] uppercase tracking-[0.26em] text-[#d8ead0]">
                    Sacred Plant Secrets
                  </p>
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/60">
              Herbal education, nutrition coaching, plant-centered blog notes,
              and gentle lifestyle support rooted in nature, balance, and
              everyday wellness.
            </p>

            <a
              href="mailto:brooke@purpleleafherbs.com"
              className="group mt-5 inline-flex items-center gap-2 rounded-full border border-[#7d9b70] bg-white px-5 py-2.5 text-sm font-semibold text-[#3b243f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fffaf5]"
            >
              <FiMail />
              brooke@purpleleafherbs.com
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Links */}
          <div className="relative z-10 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[#d8ead0]">
                Explore
              </p>

              <div className="grid gap-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white/65 transition-all duration-300 hover:border-[#7d9b70]/70 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                    <FiArrowUpRight className="opacity-35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#d8ead0] group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[#d8ead0]">
                Start Here
              </p>

              <div className="rounded-[1.5rem] border border-[#7d9b70]/35 bg-white/[0.04] p-4">
                <p className="font-serif text-xl leading-tight">
                  Blog notes, promotions, and plant-centered guidance.
                </p>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  Read the latest posts or reach out to Brooke with a question
                  about herbs, nutrition, or natural wellness.
                </p>

                <div className="mt-5 flex flex-col gap-2.5">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-3 hover:text-[#d8ead0]"
                  >
                    Visit Blog
                    <FiArrowUpRight />
                  </Link>

                  <a
                    href="mailto:brooke@purpleleafherbs.com"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-all duration-300 hover:gap-3 hover:text-white"
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
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center text-xs text-white/35 md:flex-row">
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