"use client";

import Image from "next/image";
import { useState } from "react";

type BlogPostImageProps = {
  src: string;
  alt: string;
};

const BlogPostImage = ({ src, alt }: BlogPostImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative mx-auto mt-8 h-[240px] max-w-4xl overflow-hidden rounded-[1.75rem] border border-[#7d9b70]/70 bg-[#f8f0e8] shadow-[0_12px_35px_rgba(76,51,88,0.07)] md:h-[340px]">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-[#f8f0e8] via-white to-[#eef6ea]">
          <div className="flex flex-col items-center gap-3">
            <span className="h-8 w-8 animate-spin rounded-full border-4 border-[#906198]/25 border-t-[#906198]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8f6ca1]">
              Loading image...
            </span>
          </div>
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 850px"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`object-cover transition-all duration-700 ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#2b1731]/20 via-transparent to-transparent" />
    </div>
  );
};

export default BlogPostImage;