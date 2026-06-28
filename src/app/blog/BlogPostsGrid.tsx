import { prisma } from "@/lib/prisma";
import BlogPostsClientGrid from "./BlogPostsClientGrid";

const BlogPostsGrid = async () => {
  const blogPosts = await prisma.blogPost.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return <BlogPostsClientGrid posts={blogPosts} />;
};

export default BlogPostsGrid;