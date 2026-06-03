import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/app/data/blogPosts";

export const metadata = {
  title: "Blog",
  description:
    "Plant-centered notes on herbs, nutrition, natural wellness, and grounded living from Purple Leaf Herbs.",
};

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#302133]">
      <Navbar simple />

      <section className="relative overflow-hidden px-4 py-10 md:py-12">
        <div className="absolute left-[-18%] top-[-20%] hidden h-[360px] w-[360px] rounded-full bg-[#d9c1e5]/20 blur-3xl md:block" />
        <div className="absolute bottom-[-20%] right-[-16%] hidden h-[400px] w-[400px] rounded-full bg-[#d8ead0]/30 blur-3xl md:block" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Blog intro box */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#7d9b70]/60 bg-[#f8f0e8] px-5 py-8 text-center shadow-[0_12px_35px_rgba(76,51,88,0.06)] md:px-8 md:py-9">
            <div className="absolute left-0 top-0 h-1.5 w-full bg-[#7d9b70]" />
            <div className="absolute left-0 top-1.5 h-1.5 w-full bg-[#8f6ca1]" />

            <div className="pointer-events-none absolute -left-6 top-7 text-6xl text-[#a98bb8]/10">
              ✿
            </div>

            <div className="pointer-events-none absolute -right-6 bottom-5 text-6xl text-[#7d9b70]/10">
              ❧
            </div>

            <div className="relative z-10">
              <div className="mb-4 inline-block">
                <div className="relative inline-block">
                  <span className="absolute -left-3 top-1/2 h-2.5 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />
                  <p className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8f6ca1]">
                    Purple Leaf Herbs Blog
                  </p>
                </div>
              </div>

              <h1 className="font-serif text-3xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-5xl">
                Here’s what this blog is about.
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6f5b75] md:text-base">
                Plant-centered notes on herbs, nutrition, natural wellness, and
                grounded living.
              </p>

              {/* Small signup strip */}
              <form className="mx-auto mt-6 grid max-w-xl gap-2 rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/80 p-2 shadow-[0_10px_28px_rgba(76,51,88,0.05)] sm:grid-cols-[1fr_auto]">
                <input
                  type="email"
                  placeholder="Email address"
                  className="min-h-11 rounded-full bg-transparent px-4 text-sm text-[#3b243f] outline-none placeholder:text-[#9b8aa1]"
                />

                <button
                  type="submit"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#7d9b70] bg-[#3b243f] px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8f6ca1]"
                >
                  Sign up
                </button>
              </form>

              <p className="mt-3 text-xs text-[#8b6a99]">
                Receive blog notes, wellness updates, and occasional promotions.
              </p>
            </div>
          </div>

          {/* Featured posts grid */}
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-[1.6rem] border border-[#d8c6df]/70 bg-white/80 shadow-[0_10px_28px_rgba(76,51,88,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7d9b70]"
              >
                <div className="relative h-44 overflow-hidden md:h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b1731]/20 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8f6ca1]">
                    {post.category}
                  </p>

                  <h2 className="font-serif text-2xl leading-tight text-[#3b243f]">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#6f5b75]">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#7d9b70]">
                    <span>{post.readTime}</span>
                    <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#7d9b70] bg-[#3b243f] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f6ca1]"
            >
              Back Home
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;