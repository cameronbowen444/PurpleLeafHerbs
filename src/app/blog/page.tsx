import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog",
  description:
    "Plant-centered notes on herbs, nutrition, natural wellness, and grounded living from Purple Leaf Herbs.",
};

const BlogPage = async () => {
  const blogPosts = await prisma.blogPost.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#302133]">
      <Navbar simple />

      <section className="relative overflow-hidden px-4 py-10 md:py-12">
        <div className="absolute left-[-18%] top-[-20%] hidden h-[360px] w-[360px] rounded-full bg-[#d9c1e5]/20 blur-3xl md:block" />
        <div className="absolute bottom-[-20%] right-[-16%] hidden h-[400px] w-[400px] rounded-full bg-[#d8ead0]/30 blur-3xl md:block" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Blog intro box */}
          <div className="relative overflow-hidden rounded-[1.5rem] border border-[#7d9b70]/50 bg-[#f8f0e8] px-5 py-6 text-center shadow-[0_10px_28px_rgba(76,51,88,0.05)] md:px-7">
            <div className="relative z-10">
              {/* Small signup reminder */}
              <form className="mx-auto mb-5 flex max-w-xl flex-col items-center gap-2 rounded-full border border-[#d8c6df]/70 bg-white/75 p-2 shadow-[0_8px_22px_rgba(76,51,88,0.04)] sm:flex-row">
                <p className="px-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8f6ca1]">
                  Sign up if you haven’t already
                </p>

                <div className="flex w-full flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="min-h-10 flex-1 rounded-full bg-transparent px-4 text-sm text-[#3b243f] outline-none placeholder:text-[#9b8aa1]"
                  />

                  <button
                    type="submit"
                    className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#7d9b70] bg-[#906198] px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8f6ca1]"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              <div className="mb-3 inline-block">
                <div className="relative inline-block">
                  <span className="absolute -left-3 top-1/2 h-2.5 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />

                  <p className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8f6ca1]">
                    Purple Leaf Herbs Blog
                  </p>
                </div>
              </div>

              <h1 className="font-serif text-3xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-5xl">
                Plant-centered notes for everyday wellness.
              </h1>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6f5b75] md:text-base">
                Thoughts on herbs, nutrition, natural wellness, and grounded
                living.
              </p>
            </div>
          </div>

          {/* Featured posts grid */}
          {blogPosts.length > 0 ? (
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
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
          ) : (
            <div className="mt-9 rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/75 p-8 text-center shadow-[0_10px_28px_rgba(76,51,88,0.05)]">
              <p className="font-serif text-3xl text-[#3b243f]">
                No blog posts published yet.
              </p>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#6f5b75]">
                Check back soon for plant-centered notes on herbs, nutrition,
                and natural wellness.
              </p>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#7d9b70] bg-[#906198] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f6ca1]"
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