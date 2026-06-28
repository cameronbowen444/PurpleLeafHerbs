"use client";

import { useFormStatus } from "react-dom";
import { FiCheckCircle } from "react-icons/fi";

type PublishBlogPostButtonProps = {
  postId: string;
  isPublished: boolean;
  publishAction: (formData: FormData) => void | Promise<void>;
};

const PublishSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`inline-flex items-center gap-2 rounded-full bg-[#7d9b70] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#6f8d62] ${
        pending ? "cursor-not-allowed opacity-70" : ""
      }`}
    >
      {pending ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          Publishing...
        </>
      ) : (
        <>
          Publish Post
          <FiCheckCircle />
        </>
      )}
    </button>
  );
};

const PublishBlogPostButton = ({
  postId,
  isPublished,
  publishAction,
}: PublishBlogPostButtonProps) => {
  if (isPublished) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white">
        <FiCheckCircle />
        Already Published
      </span>
    );
  }

  return (
    <form action={publishAction}>
      <input type="hidden" name="id" value={postId} />
      <PublishSubmitButton />
    </form>
  );
};

export default PublishBlogPostButton;