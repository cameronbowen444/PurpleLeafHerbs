"use client";

import { useState } from "react";

const BlogSignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    // Temporary loading feedback until Brevo/email signup is connected.
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-5 flex max-w-xl flex-col items-center gap-2 rounded-full border border-[#d8c6df]/70 bg-white/75 p-2 shadow-[0_8px_22px_rgba(76,51,88,0.04)] sm:flex-row"
    >
      <p className="px-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8f6ca1]">
        Sign up if you haven’t already
      </p>

      <div className="flex w-full flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          placeholder="Email address"
          className="min-h-10 flex-1 rounded-full bg-transparent px-4 text-sm text-[#3b243f] outline-none placeholder:text-[#9b8aa1]"
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`inline-flex min-h-10 items-center justify-center rounded-full border border-[#7d9b70] bg-[#906198] px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8f6ca1] ${
            isLoading ? "cursor-not-allowed opacity-70" : ""
          }`}
        >
          {isLoading ? (
            <span className="inline-flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Signing up...
            </span>
          ) : (
            "Sign up"
          )}
        </button>
      </div>
    </form>
  );
};

export default BlogSignupForm;