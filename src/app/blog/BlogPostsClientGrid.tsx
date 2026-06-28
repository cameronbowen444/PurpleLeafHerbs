"use client";

import Image from "next/image";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import LoadingLink from "@/components/LoadingLink";

type BlogPostCard = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
};

type BlogPostsClientGridProps = {
  posts: BlogPostCard[];
};

const BlogPostsClientGrid = ({ posts }: BlogPostsClientGridProps) => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  if (posts.length === 0) {
    return (
      <div className="mt-9 rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/75 p-8 text-center shadow-[0_10px_28px_rgba(76,51,88,0.05)]">
        <p className="font-serif text-3xl text-[#3b243f]">
          No blog posts published yet.
        </p>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#6f5b75]">
          Check back soon for plant-centered notes on herbs, nutrition, and
          natural wellness.
        </p>
      </div>
    );
  }

  const markImageLoaded = (postId: string) => {
    setLoadedImages((current) => ({
      ...current,
      [postId]: true,
    }));
  };

  return (
    <div className="mt-9 grid gap-5 md:grid-cols-3">
      {posts.map((post) => {
        const imageLoaded = loadedImages[post.id];

        return (
          <LoadingLink
            key={post.id}
            href={`/blog/${post.slug}`}
            loadingText="Opening post..."
            overlay
            className="group overflow-hidden rounded-[1.6rem] border border-[#d8c6df]/70 bg-white/80 shadow-[0_10px_28px_rgba(76,51,88,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7d9b70]"
          >
            <div className="relative h-44 overflow-hidden bg-[#f8f0e8] md:h-48">
              {!imageLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-[#f8f0e8] via-white to-[#eef6ea]">
                  <div className="flex flex-col items-center gap-3">
                    <span className="h-7 w-7 animate-spin rounded-full border-4 border-[#906198]/25 border-t-[#906198]" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8f6ca1]">
                      Loading image...
                    </span>
                  </div>
                </div>
              )}

              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`object-cover transition-all duration-700 group-hover:scale-[1.03] ${
                  imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
                }`}
                onLoad={() => markImageLoaded(post.id)}
                onError={() => markImageLoaded(post.id)}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2b1731]/20 via-transparent to-transparent" />
            </div>

            <div className="p-5">
              <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8f6ca1]">
                {post.category}
              </p>

              <h2 className="font-serif text-2xl leading-tight text-[#3b243f]">
                {post.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#6f5b75]">
                {post.excerpt}
              </p>

              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#7d9b70]">
                <span>{post.readTime}</span>
                <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </LoadingLink>
        );
      })}
    </div>
  );
};

export default BlogPostsClientGrid;