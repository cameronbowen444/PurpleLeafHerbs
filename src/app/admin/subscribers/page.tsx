import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import SubscribersPanel from "./SubscribersPanel";

const AdminSubscribersPage = async () => {
  await auth.protect();

  return (
    <main className="min-h-screen bg-[#fffaf5] px-4 py-10 text-[#302133]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            href="/admin"
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8f6ca1] transition hover:text-[#3b243f]"
          >
            <FiArrowLeft />
            Back to dashboard
          </Link>

          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8f6ca1]">
            Admin
          </p>

          <h1 className="mt-2 font-serif text-4xl text-[#3b243f]">
            Subscribers
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6f5b75]">
            View, search, update, export, and manage website subscribers
            collected through the Purple Leaf Herbs signup form.
          </p>
        </div>

        <SubscribersPanel />
      </div>
    </main>
  );
};

export default AdminSubscribersPage;