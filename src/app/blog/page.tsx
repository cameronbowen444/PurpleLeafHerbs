import { Suspense } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import LoadingLink from "@/components/LoadingLink";
import BlogSignupForm from "./BlogSignupForm";
import BlogPostsGrid from "./BlogPostsGrid";
import BlogPostsLoading from "./BlogPostsLoading";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog",
  description:
    "Plant-centered notes on herbs, nutrition, natural wellness, and grounded living from Purple Leaf Herbs.",
};

const BlogPage = async () => {
  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#302133]">
      <Navbar simple />

      <section className="relative overflow-hidden px-4 py-10 md:py-12">
        <div className="absolute left-[-18%] top-[-20%] hidden h-[360px] w-[360px] rounded-full bg-[#d9c1e5]/20 blur-3xl md:block" />
        <div className="absolute bottom-[-20%] right-[-16%] hidden h-[400px] w-[400px] rounded-full bg-[#d8ead0]/30 blur-3xl md:block" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-[#7d9b70]/50 bg-[#f8f0e8] px-5 py-6 text-center shadow-[0_10px_28px_rgba(76,51,88,0.05)] md:px-7">
            <div className="relative z-10">
              <BlogSignupForm />

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

          <Suspense fallback={<BlogPostsLoading />}>
            <BlogPostsGrid />
          </Suspense>

          <div className="mt-10 text-center">
            <LoadingLink
              href="/"
              loadingText="Going home..."
              className="inline-flex items-center gap-2 rounded-full border border-[#7d9b70] bg-[#906198] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f6ca1]"
            >
              Back Home
              <FiArrowUpRight />
            </LoadingLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;