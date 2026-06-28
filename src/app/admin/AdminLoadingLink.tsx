"use client";

import Link from "next/link";
import { useState } from "react";

type AdminLoadingLinkProps = {
  href: string;
  children: React.ReactNode;
  className: string;
  loadingText?: string;
};

const AdminLoadingLink = ({
  href,
  children,
  className,
  loadingText = "Opening...",
}: AdminLoadingLinkProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link
      href={href}
      onClick={() => setIsLoading(true)}
      className={`${className} ${isLoading ? "pointer-events-none opacity-70" : ""}`}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current" />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </Link>
  );
};

export default AdminLoadingLink;