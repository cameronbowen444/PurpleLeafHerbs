import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { FiArrowLeft } from "react-icons/fi";
import { createBlogPost } from "../actions";
import CreateBlogPostForm from "./CreateBlogPostForm";

const NewBlogPostPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

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

        <div className="mb-8 border-b border-[#d8c6df]/70 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8f6ca1]">
            New Blog Post
          </p>

          <h1 className="mt-2 font-serif text-4xl text-[#3b243f] md:text-5xl">
            Create a Post
          </h1>
        </div>

        <CreateBlogPostForm createAction={createBlogPost} />
      </div>
    </main>
  );
};

export default NewBlogPostPage;