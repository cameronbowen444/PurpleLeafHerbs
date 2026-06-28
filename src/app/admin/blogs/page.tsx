import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { FiArrowLeft, FiEdit3, FiEye, FiPlus } from "react-icons/fi";
import { prisma } from "@/lib/prisma";

const AdminBlogsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const posts = await prisma.blogPost.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#fffaf5] px-4 py-10 text-[#302133]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 border-b border-[#d8c6df]/70 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/admin"
              className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#6f5b75] underline decoration-[#7d9b70] decoration-4 underline-offset-8 transition-colors duration-300 hover:text-[#3b243f]"
            >
              <FiArrowLeft />
              Back to Dashboard
            </Link>

            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8f6ca1]">
              Admin
            </p>

            <h1 className="mt-2 font-serif text-4xl text-[#3b243f] md:text-5xl">
              Manage Blog Posts
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/admin/blogs/new"
              className="inline-flex items-center gap-2 rounded-full border border-[#7d9b70] bg-[#906198] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f6ca1]"
            >
              <FiPlus />
              New Post
            </Link>

            <UserButton />
          </div>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/80 p-5 shadow-[0_10px_28px_rgba(76,51,88,0.05)]"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          post.published
                            ? "bg-[#d8ead0] text-[#49643e]"
                            : "bg-[#f1e4f5] text-[#8f6ca1]"
                        }`}
                      >
                        {post.published ? "Published" : "Draft"}
                      </span>

                      <span className="text-xs uppercase tracking-[0.2em] text-[#7d9b70]">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl leading-tight text-[#3b243f]">
                      {post.title}
                    </h2>

                    <p className="mt-2 text-sm text-[#6f5b75]">
                      /blog/{post.slug}
                    </p>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6f5b75]">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/admin/blogs/${post.id}/preview`}
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-[#7d9b70]/70 bg-[#f1f6ee] px-5 py-2.5 text-sm font-semibold text-[#49643e] transition-all duration-300 hover:border-[#7d9b70] hover:bg-white"
                    >
                      View
                      <FiEye />
                    </Link>

                    <Link
                      href={`/admin/blogs/${post.id}/edit`}
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d8c6df]/80 bg-[#fffaf5] px-5 py-2.5 text-sm font-semibold text-[#3b243f] transition-all duration-300 hover:border-[#7d9b70] hover:bg-white"
                    >
                      Edit
                      <FiEdit3 />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/75 p-8 text-center shadow-[0_10px_28px_rgba(76,51,88,0.05)]">
            <p className="font-serif text-3xl text-[#3b243f]">
              No posts yet.
            </p>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#6f5b75]">
              Create the first blog post for Purple Leaf Herbs.
            </p>

            <Link
              href="/admin/blogs/new"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#7d9b70] bg-[#906198] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8f6ca1]"
            >
              Create First Post
              <FiPlus />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminBlogsPage;