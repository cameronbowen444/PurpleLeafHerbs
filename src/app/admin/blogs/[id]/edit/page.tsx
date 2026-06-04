import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { FiArrowLeft, FiTrash2 } from "react-icons/fi";
import { prisma } from "@/lib/prisma";
import { deleteBlogPost, updateBlogPost } from "../../actions";

type EditBlogPostPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const EditBlogPostPage = async ({ params }: EditBlogPostPageProps) => {
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

  const contentText = Array.isArray(post.content)
    ? post.content.join("\n\n")
    : "";

  return (
    <main className="min-h-screen bg-[#fffaf5] px-4 py-10 text-[#302133]">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/blogs"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#6f5b75] underline decoration-[#7d9b70] decoration-4 underline-offset-8 transition-colors duration-300 hover:text-[#3b243f]"
        >
          <FiArrowLeft />
          Back to Posts
        </Link>

        <div className="mb-8 flex flex-col gap-5 border-b border-[#d8c6df]/70 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8f6ca1]">
              Edit Blog Post
            </p>

            <h1 className="mt-2 font-serif text-4xl text-[#3b243f] md:text-5xl">
              Update Post
            </h1>
          </div>

          <form action={deleteBlogPost}>
            <input type="hidden" name="id" value={post.id} />

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700 transition-all duration-300 hover:bg-red-100"
            >
              <FiTrash2 />
              Delete
            </button>
          </form>
        </div>

        <form
          action={updateBlogPost}
          className="rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/80 p-6 shadow-[0_10px_28px_rgba(76,51,88,0.05)]"
        >
          <input type="hidden" name="id" value={post.id} />

          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
                Title
              </label>
              <input
                name="title"
                type="text"
                required
                defaultValue={post.title}
                className="w-full rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm outline-none focus:border-[#7d9b70]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
                Slug
              </label>
              <input
                name="slug"
                type="text"
                required
                defaultValue={post.slug}
                className="w-full rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm outline-none focus:border-[#7d9b70]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
                Excerpt
              </label>
              <textarea
                name="excerpt"
                rows={3}
                required
                defaultValue={post.excerpt}
                className="w-full resize-none rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm outline-none focus:border-[#7d9b70]"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
                  Category
                </label>
                <input
                  name="category"
                  type="text"
                  required
                  defaultValue={post.category}
                  className="w-full rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm outline-none focus:border-[#7d9b70]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
                  Date
                </label>
                <input
                  name="date"
                  type="text"
                  required
                  defaultValue={post.date}
                  className="w-full rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm outline-none focus:border-[#7d9b70]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
                  Read Time
                </label>
                <input
                  name="readTime"
                  type="text"
                  required
                  defaultValue={post.readTime}
                  className="w-full rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm outline-none focus:border-[#7d9b70]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
                Image Path
              </label>
              <input
                name="image"
                type="text"
                required
                defaultValue={post.image}
                className="w-full rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm outline-none focus:border-[#7d9b70]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
                Content
              </label>
              <textarea
                name="content"
                rows={10}
                required
                defaultValue={contentText}
                className="w-full resize-none rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-[#7d9b70]"
              />
            </div>

            <label className="flex items-center gap-3 rounded-xl border border-[#d8c6df]/70 bg-[#fffaf5] px-4 py-3 text-sm text-[#6f5b75]">
              <input
                name="published"
                type="checkbox"
                defaultChecked={post.published}
                className="h-4 w-4 accent-[#906198]"
              />
              Publish this post
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full border border-[#7d9b70] bg-[#906198] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8f6ca1]"
          >
            Save Changes
          </button>
        </form>
      </div>
    </main>
  );
};

export default EditBlogPostPage;