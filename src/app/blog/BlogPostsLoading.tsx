const BlogPostsLoading = () => {
  return (
    <div className="mt-9 rounded-[1.75rem] border border-[#d8c6df]/70 bg-white/80 p-10 text-center shadow-[0_14px_38px_rgba(76,51,88,0.08)]">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#d8c6df]/70 bg-[#fffaf5]">
        <span className="h-7 w-7 animate-spin rounded-full border-4 border-[#906198]/25 border-t-[#906198]" />
      </div>

      <p className="font-serif text-3xl text-[#3b243f]">
        Loading blog posts...
      </p>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#6f5b75]">
        Gathering the latest plant-centered notes from Purple Leaf Herbs.
      </p>
    </div>
  );
};

export default BlogPostsLoading;