"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

const requireAdmin = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }
};

const slugify = (value: string) => {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const getContentParagraphs = (content: FormDataEntryValue | null) => {
  if (!content) return [];

  return String(content)
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
};

export const createBlogPost = async (formData: FormData) => {
  await requireAdmin();

  const title = String(formData.get("title") || "").trim();
  const customSlug = String(formData.get("slug") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const date = String(formData.get("date") || "").trim();
  const readTime = String(formData.get("readTime") || "").trim();
  const image = String(formData.get("image") || "").trim();
  const content = getContentParagraphs(formData.get("content"));
  const published = formData.get("published") === "on";

  if (!title || !excerpt || !category || !date || !readTime || !image) {
    throw new Error("Missing required fields");
  }

  const slug = customSlug ? slugify(customSlug) : slugify(title);

  await prisma.blogPost.create({
    data: {
      title,
      slug,
      excerpt,
      category,
      date,
      readTime,
      image,
      content,
      published,
    },
  });

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin/blogs");

  redirect("/admin/blogs");
};

export const updateBlogPost = async (formData: FormData) => {
  await requireAdmin();

  const id = String(formData.get("id") || "");
  const title = String(formData.get("title") || "").trim();
  const customSlug = String(formData.get("slug") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const date = String(formData.get("date") || "").trim();
  const readTime = String(formData.get("readTime") || "").trim();
  const image = String(formData.get("image") || "").trim();
  const content = getContentParagraphs(formData.get("content"));
  const published = formData.get("published") === "on";

  if (!id || !title || !excerpt || !category || !date || !readTime || !image) {
    throw new Error("Missing required fields");
  }

  const slug = customSlug ? slugify(customSlug) : slugify(title);

  await prisma.blogPost.update({
    where: {
      id,
    },
    data: {
      title,
      slug,
      excerpt,
      category,
      date,
      readTime,
      image,
      content,
      published,
    },
  });

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin/blogs");

  redirect("/admin/blogs");
};

export const deleteBlogPost = async (formData: FormData) => {
  await requireAdmin();

  const id = String(formData.get("id") || "");

  if (!id) {
    throw new Error("Missing post id");
  }

  await prisma.blogPost.delete({
    where: {
      id,
    },
  });

  revalidatePath("/blog");
  revalidatePath("/admin/blogs");

  redirect("/admin/blogs");
};