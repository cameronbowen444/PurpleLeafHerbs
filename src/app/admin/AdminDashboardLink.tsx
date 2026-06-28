"use client";

import Link from "next/link";
import { useState } from "react";

type AdminDashboardLinkProps = {
  href: string;
  title: string;
  description: string;
};

const AdminDashboardLink = ({
  href,
  title,
  description,
}: AdminDashboardLinkProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link
      href={href}
      onClick={() => setIsLoading(true)}
      className={`rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/80 p-6 shadow-[0_10px_28px_rgba(76,51,88,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7d9b70] ${
        isLoading ? "pointer-events-none opacity-70" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-serif text-3xl text-[#3b243f]">{title}</p>

          <p className="mt-3 text-sm leading-6 text-[#6f5b75]">
            {description}
          </p>
        </div>

        {isLoading && (
          <span className="mt-1 h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-[#906198]/30 border-t-[#906198]" />
        )}
      </div>

      {isLoading && (
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6ca1]">
          Opening...
        </p>
      )}
    </Link>
  );
};

export default AdminDashboardLink;