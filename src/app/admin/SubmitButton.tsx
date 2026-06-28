"use client";

import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  children: React.ReactNode;
  pendingText?: string;
  className?: string;
};

const SubmitButton = ({
  children,
  pendingText = "Saving...",
  className = "",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${className} ${
        pending ? "cursor-not-allowed opacity-70" : ""
      }`}
    >
      {pending ? (
        <span className="inline-flex items-center justify-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          {pendingText}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default SubmitButton;