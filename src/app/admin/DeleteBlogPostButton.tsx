"use client";

import { useState } from "react";
import { FiTrash2, FiX } from "react-icons/fi";

type DeleteBlogPostButtonProps = {
  postId: string;
  deleteAction: (formData: FormData) => void | Promise<void>;
};

const DeleteBlogPostButton = ({
  postId,
  deleteAction,
}: DeleteBlogPostButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700 transition-all duration-300 hover:bg-red-100"
      >
        <FiTrash2 />
        Delete
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#302133]/50 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[1.5rem] border border-red-100 bg-white p-6 shadow-[0_18px_60px_rgba(48,33,51,0.18)]">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
                  Confirm Delete
                </p>

                <h2 className="mt-2 font-serif text-3xl text-[#3b243f]">
                  Delete this post?
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-[#d8c6df]/70 p-2 text-[#6f5b75] transition hover:bg-[#fffaf5]"
              >
                <FiX />
              </button>
            </div>

            <p className="text-sm leading-6 text-[#6f5b75]">
              This will permanently delete the blog post. This action cannot be
              undone.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-[#d8c6df]/80 bg-white px-5 py-3 text-sm font-semibold text-[#6f5b75] transition hover:bg-[#fffaf5]"
              >
                Cancel
              </button>

              <form action={deleteAction}>
                <input type="hidden" name="id" value={postId} />

                <button
                  type="submit"
                  className="w-full rounded-full border border-red-300 bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Yes, Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteBlogPostButton;