"use client";

import { useState } from "react";

const BlogSignupForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subscriptionType: "blog",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Could not sign up. Please try again.");
        return;
      }

      setEmail("");
      setMessage("Thank you for joining!");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <div className="mx-auto mb-6 max-w-3xl px-2 text-center">
    <div className="mb-3">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8f6ca1]">
        Blog Updates
      </p>

      <h3 className="mt-1 font-serif text-2xl text-[#3b243f]">
        Sign up for blog post updates
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#6f5b75]">
        Get notified when new Purple Leaf Herbs blog notes are published.
      </p>
    </div>

    <form
      onSubmit={handleSubmit}
      className="rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/80 p-4 shadow-[0_8px_22px_rgba(76,51,88,0.04)] sm:rounded-full sm:p-2"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="email"
          required
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-11 w-full rounded-full border border-[#eaddec] bg-[#fffaf5] px-4 text-sm text-[#3b243f] outline-none placeholder:text-[#9b8aa1] transition focus:border-[#7d9b70] sm:min-h-10 sm:flex-1 sm:border-0 sm:bg-transparent"
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-full border border-[#7d9b70] bg-[#906198] px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8f6ca1] sm:min-h-10 sm:w-auto ${
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

    {message && (
      <p className="mt-2 text-center text-xs font-semibold text-[#4f7a43]">
        {message}
      </p>
    )}

    {error && (
      <p className="mt-2 text-center text-xs font-semibold text-red-600">
        {error}
      </p>
    )}
  </div>
);
};

export default BlogSignupForm;
