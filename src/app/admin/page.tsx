import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const AdminPage = async () => {
  await auth.protect();

  return (
    <main className="min-h-screen bg-[#fffaf5] px-4 py-10 text-[#302133]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#d8c6df]/70 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8f6ca1]">
              Admin Dashboard
            </p>

            <h1 className="mt-2 font-serif text-4xl text-[#3b243f]">
              Purple Leaf Herbs
            </h1>
          </div>

          <UserButton />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Link
            href="/admin/blogs"
            className="rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/80 p-6 shadow-[0_10px_28px_rgba(76,51,88,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7d9b70]"
          >
            <p className="font-serif text-3xl text-[#3b243f]">
              Manage Blog Posts
            </p>

            <p className="mt-3 text-sm leading-6 text-[#6f5b75]">
              Create, update, publish, and delete blog posts.
            </p>
          </Link>

          <div className="rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/60 p-6 opacity-70">
            <p className="font-serif text-3xl text-[#3b243f]">
              Mailing List
            </p>

            <p className="mt-3 text-sm leading-6 text-[#6f5b75]">
              Mailchimp connection coming later.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminPage;