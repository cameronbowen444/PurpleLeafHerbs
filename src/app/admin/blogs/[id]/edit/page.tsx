import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { FiArrowLeft } from "react-icons/fi";
import { prisma } from "@/lib/prisma";
import { deleteBlogPost, updateBlogPost } from "../../actions";
import DeleteBlogPostButton from "@/app/admin/DeleteBlogPostButton";
import EditBlogPostForm from "./EditBlogPostForm";

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

          <DeleteBlogPostButton
            postId={post.id}
            deleteAction={deleteBlogPost}
          />
        </div>

        <EditBlogPostForm
          updateAction={updateBlogPost}
          post={{
            id: post.id,
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            category: post.category,
            date: post.date,
            readTime: post.readTime,
            image: post.image,
            content: contentText,
            published: post.published,
          }}
        />
      </div>
    </main>
  );
};

export default EditBlogPostPage;