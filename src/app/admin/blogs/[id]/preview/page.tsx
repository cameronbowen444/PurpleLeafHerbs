import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { FiArrowLeft, FiEdit3, FiEye } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import { prisma } from "@/lib/prisma";

type AdminBlogPreviewPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = "force-dynamic";

const AdminBlogPreviewPage = async ({ params }: AdminBlogPreviewPageProps) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const { id } = await params;

  const post = await prisma.blogPost.findUnique({
    where: {
      id,
    },
  });

  if (!post) {
    notFound();
  }

  const relatedPosts = await prisma.blogPost.findMany({
    where: {
      published: true,
      NOT: {
        id: post.id,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 2,
  });

  const paragraphs = Array.isArray(post.content)
    ? post.content.map((paragraph) => String(paragraph))
    : [];

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#302133]">
      <Navbar simple />

      <div className="border-b border-[#d8c6df]/70 bg-[#3b243f] px-4 py-3 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <FiEye />
            Admin Preview
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs">
              {post.published ? "Published" : "Draft"}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/blogs"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold transition hover:bg-white/10"
            >
              <FiArrowLeft />
              Back to Posts
            </Link>

            <Link
              href={`/admin/blogs/${post.id}/edit`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#3b243f] transition hover:bg-[#fffaf5]"
            >
              Edit Post
              <FiEdit3 />
            </Link>
          </div>
        </div>
      </div>

      <article className="relative overflow-hidden px-4 py-10 md:py-12">
        <div className="absolute left-[-18%] top-[-20%] hidden h-[360px] w-[360px] rounded-full bg-[#d9c1e5]/20 blur-3xl md:block" />
        <div className="absolute bottom-[-20%] right-[-16%] hidden h-[400px] w-[400px] rounded-full bg-[#d8ead0]/30 blur-3xl md:block" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <Link
            href="/admin/blogs"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#6f5b75] underline decoration-[#7d9b70] decoration-4 underline-offset-8 transition-colors duration-300 hover:text-[#3b243f]"
          >
            <FiArrowLeft />
            Back to Admin Blog Posts
          </Link>

          <header className="border-b-4 border-[#8f6ca1] pb-7 text-center">
            <div className="mb-4 inline-block">
              <div className="relative inline-block">
                <span className="absolute -left-3 top-1/2 h-2.5 w-[112%] -translate-y-1/2 rounded-full bg-[#d8ead0]/90" />

                <p className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8f6ca1]">
                  {post.category}
                </p>
              </div>
            </div>

            <h1 className="mx-auto max-w-4xl font-serif text-3xl leading-tight tracking-[-0.04em] text-[#3b243f] md:text-5xl">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-[#7d9b70]">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6f5b75]">
              {post.excerpt}
            </p>
          </header>

          <div className="relative mx-auto mt-8 h-[240px] max-w-4xl overflow-hidden rounded-[1.75rem] border border-[#7d9b70]/70 shadow-[0_12px_35px_rgba(76,51,88,0.07)] md:h-[340px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2b1731]/20 via-transparent to-transparent" />
          </div>

          <div className="mx-auto mt-8 max-w-3xl">
            <div className="rounded-[1.75rem] border border-[#d8c6df]/70 bg-[#f8f0e8] p-6 shadow-[0_10px_28px_rgba(76,51,88,0.05)] md:p-7">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px flex-1 bg-[#8f6ca1]/40" />
                <span className="font-serif text-xl text-[#7d9b70]">✦</span>
                <span className="h-px flex-1 bg-[#8f6ca1]/40" />
              </div>

              <div className="space-y-5">
                {paragraphs.length > 0 ? (
                  paragraphs.map((paragraph, index) => (
                    <p
                      key={`${paragraph}-${index}`}
                      className="text-base leading-8 text-[#5f4f66]"
                    >
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-base leading-8 text-[#5f4f66]">
                    No content has been added yet.
                  </p>
                )}
              </div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <section className="mt-12">
              <div className="mb-6 flex flex-col gap-4 border-b border-[#d8c6df]/70 pb-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8f6ca1]">
                    Keep Reading
                  </p>

                  <h2 className="font-serif text-3xl text-[#3b243f] md:text-4xl">
                    More from the blog
                  </h2>
                </div>

                <Link
                  href="/blog"
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#6f5b75] underline decoration-[#7d9b70] decoration-4 underline-offset-8 transition-colors duration-300 hover:text-[#3b243f]"
                >
                  View Public Blog
                </Link>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/75 p-5 shadow-[0_10px_28px_rgba(76,51,88,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7d9b70]"
                  >
                    <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8f6ca1]">
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
          )}
        </div>
      </article>
    </main>
  );
};

export default AdminBlogPreviewPage;