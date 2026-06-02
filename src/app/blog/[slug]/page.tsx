import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { blogPosts } from "@/app/data/blogPosts";
import Navbar from "@/components/Navbar";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = () => {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Purple Leaf Herbs`,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug);

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#302133]">
      <Navbar simple />
      <article className="relative overflow-hidden px-4 py-14 md:py-16">
        <div className="absolute left-[-18%] top-[-20%] hidden h-[420px] w-[420px] rounded-full bg-[#d9c1e5]/25 blur-3xl md:block" />
        <div className="absolute bottom-[-20%] right-[-16%] hidden h-[480px] w-[480px] rounded-full bg-[#d8ead0]/35 blur-3xl md:block" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#6f5b75] underline decoration-[#7d9b70] decoration-4 underline-offset-8 transition-colors duration-300 hover:text-[#3b243f]"
          >
            <FiArrowLeft />
            Back to Blog
          </Link>

          <header className="border-b-4 border-[#8f6ca1] pb-8 text-center">
            <div className="mb-5 inline-block">
              <div className="relative inline-block">
                <span className="absolute -left-4 top-1/2 h-3 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />
                <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.38em] text-[#8f6ca1]">
                  {post.category}
                </p>
              </div>
            </div>

            <h1 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-6xl">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] text-[#7d9b70]">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f5b75]">
              {post.excerpt}
            </p>
          </header>

          {/* Smaller image */}
          <div className="relative mx-auto mt-10 h-[300px] max-w-4xl overflow-hidden rounded-[2.25rem] border-2 border-[#7d9b70]/70 shadow-[0_14px_40px_rgba(76,51,88,0.08)] md:h-[420px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b1731]/25 via-transparent to-transparent" />
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-[2.25rem] border border-[#d8c6df]/70 bg-[#f8f0e8] p-7 shadow-[0_12px_35px_rgba(76,51,88,0.06)] md:p-9">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px flex-1 bg-[#8f6ca1]/45" />
                <span className="font-serif text-2xl text-[#7d9b70]">✦</span>
                <span className="h-px flex-1 bg-[#8f6ca1]/45" />
              </div>

              <div className="space-y-7">
                {post.content.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-lg leading-8 text-[#5f4f66]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <section className="mt-14">
            <div className="mb-8 flex flex-col gap-4 border-b border-[#d8c6df]/70 pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#8f6ca1]">
                  Keep Reading
                </p>
                <h2 className="font-serif text-4xl text-[#3b243f]">
                  More from the blog
                </h2>
              </div>

              <Link
                href="/blog"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#6f5b75] underline decoration-[#7d9b70] decoration-4 underline-offset-8 transition-colors duration-300 hover:text-[#3b243f]"
              >
                View All
                <FiArrowUpRight />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.slice(0, 2).map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group rounded-[2rem] border border-[#d8c6df]/70 bg-white/75 p-6 shadow-[0_12px_35px_rgba(76,51,88,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#7d9b70]"
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#8f6ca1]">
                    {relatedPost.category}
                  </p>

                  <h3 className="font-serif text-2xl leading-tight text-[#3b243f]">
                    {relatedPost.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6f5b75]">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};

export default BlogPostPage;