import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import LoadingLink from "@/components/LoadingLink";

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
    <footer className="relative overflow-hidden bg-[#906198] px-4 py-10 text-white">
      <div className="absolute left-[-10%] top-[-20%] hidden h-72 w-72 rounded-full bg-[#f1dff4]/18 blur-3xl md:block" />
      <div className="absolute bottom-[-25%] right-[-10%] hidden h-80 w-80 rounded-full bg-[#d8ead0]/20 blur-3xl md:block" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative grid gap-8 overflow-hidden rounded-[2rem] border border-[#ead4ef]/35 bg-white/[0.08] p-6 shadow-[0_14px_45px_rgba(43,23,49,0.18)] md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="absolute left-0 top-0 h-1.5 w-full bg-[#d8ead0]" />
          <div className="absolute left-0 top-1.5 h-1.5 w-full bg-[#caa6d1]" />

          <div className="relative z-10">
            <Link href="/#home" className="inline-flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#d8ead0] bg-white shadow-md">
                <Image
                  src="/assets/logo-4.png"
                  alt="Purple Leaf Herbs logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-serif text-xl text-white">
                  Purple Leaf Herbs
                </p>

                <div className="relative mt-1 inline-block">
                  <span className="absolute -left-2 top-1/2 h-2 w-[108%] -translate-y-1/2 rounded-full bg-[#d8ead0]/25" />
                  <p className="relative z-10 text-[10px] uppercase tracking-[0.26em] text-[#f4e9f7]">
                    Sacred Plant Secrets
                  </p>
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/72">
              Herbal education, nutrition coaching, plant-centered blog notes,
              and gentle lifestyle support rooted in nature, balance, and
              everyday wellness.
            </p>

            <a
              href="mailto:brooke@purpleleafherbs.com"
              className="group mt-5 inline-flex items-center gap-2 rounded-full border border-[#d8ead0] bg-[#fffaf5] px-5 py-2.5 text-sm font-semibold text-[#5a3761] shadow-[0_8px_22px_rgba(43,23,49,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <FiMail />
              brooke@purpleleafherbs.com
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="relative z-10 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[#d8ead0]">
                Explore
              </p>

              <div className="grid gap-2">
                {footerLinks.map((link) =>
                  link.href === "/blog" ? (
                    <LoadingLink
                      key={link.label}
                      href={link.href}
                      loadingText="Opening blog..."
                      className="group flex items-center justify-between rounded-xl border border-white/12 bg-white/[0.06] px-3.5 py-2.5 text-sm text-white/76 transition-all duration-300 hover:border-[#d8ead0]/70 hover:bg-white/[0.12] hover:text-white"
                    >
                      {link.label}
                      <FiArrowUpRight className="opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#d8ead0] group-hover:opacity-100" />
                    </LoadingLink>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group flex items-center justify-between rounded-xl border border-white/12 bg-white/[0.06] px-3.5 py-2.5 text-sm text-white/76 transition-all duration-300 hover:border-[#d8ead0]/70 hover:bg-white/[0.12] hover:text-white"
                    >
                      {link.label}
                      <FiArrowUpRight className="opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#d8ead0] group-hover:opacity-100" />
                    </Link>
                  )
                )}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[#d8ead0]">
                Start Here
              </p>

              <div className="rounded-[1.5rem] border border-[#ead4ef]/30 bg-white/[0.07] p-4">
                <p className="font-serif text-xl leading-tight text-white">
                  Blog notes, promotions, and plant-centered guidance.
                </p>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  Read the latest posts or reach out to Brooke with a question
                  about herbs, nutrition, or natural wellness.
                </p>

                <div className="mt-5 flex flex-col gap-2.5">
                  <LoadingLink
                    href="/blog"
                    loadingText="Opening blog..."
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#f4e9f7] transition-all duration-300 hover:gap-3 hover:text-[#d8ead0]"
                  >
                    Visit Blog
                    <FiArrowUpRight />
                  </LoadingLink>

                  <a
                    href="mailto:brooke@purpleleafherbs.com"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/72 transition-all duration-300 hover:gap-3 hover:text-white"
                  >
                    Email Brooke
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center text-xs text-white/48 md:flex-row">
          <p>
            © {new Date().getFullYear()} Purple Leaf Herbs. All rights reserved.
          </p>

          <p>
            <span className="text-[#d8ead0]/90">Holistic wellness</span> rooted
            in the wisdom of plants.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;