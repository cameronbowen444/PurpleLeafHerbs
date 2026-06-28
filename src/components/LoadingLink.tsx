"use client";

import Link from "next/link";
import { useState } from "react";

type LoadingLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  loadingText?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  overlay?: boolean;
};

const LoadingLink = ({
  href,
  children,
  className = "",
  loadingText = "Opening...",
  onClick,
  target,
  rel,
  overlay = false,
}: LoadingLinkProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#") ||
    href.includes("#");

  const handleClick = () => {
    onClick?.();

    if (!isExternal) {
      setIsLoading(true);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      target={target}
      rel={rel}
      className={`${className} ${overlay ? "relative" : ""} ${
        isLoading ? "pointer-events-none opacity-80" : ""
      }`}
    >
      {overlay ? (
        <>
          {children}

          {isLoading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center rounded-[inherit] bg-[#fffaf5]/85 backdrop-blur-sm">
              <div className="flex items-center gap-2 rounded-full border border-[#d8c6df]/80 bg-white px-4 py-2 text-sm font-semibold text-[#3b243f] shadow-[0_10px_28px_rgba(76,51,88,0.12)]">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#906198]/30 border-t-[#906198]" />
                {loadingText}
              </div>
            </div>
          )}
        </>
      ) : isLoading ? (
        <span className="inline-flex items-center justify-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current" />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </Link>
  );
};

export default LoadingLink;