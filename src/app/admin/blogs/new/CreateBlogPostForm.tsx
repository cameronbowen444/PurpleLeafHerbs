"use client";

import { useState } from "react";
import BlogImagePicker, { assetImages } from "../../BlogImagePicker";
import SubmitButton from "@/app/admin/SubmitButton";

type CreateBlogPostFormProps = {
  createAction: (formData: FormData) => void | Promise<void>;
};

type FieldErrors = {
  title?: string;
  excerpt?: string;
  category?: string;
  date?: string;
  readTime?: string;
  content?: string;
};

const CreateBlogPostForm = ({ createAction }: CreateBlogPostFormProps) => {
  const [errors, setErrors] = useState<FieldErrors>({});

  const getRandomDefaultImage = () => {
    const randomIndex = Math.floor(Math.random() * assetImages.length);
    return assetImages[randomIndex].value;
  };

  const isValidImageValue = (value: string) => {
    const image = value.trim();

    if (!image) return false;

    const isLocalAsset = image.startsWith("/assets/");

    const isRemoteImage =
      image.startsWith("https://images.unsplash.com/") ||
      image.startsWith("https://res.cloudinary.com/") ||
      image.startsWith("https://utfs.io/") ||
      image.includes(".public.blob.vercel-storage.com") ||
      image.startsWith("https://images.pexels.com/") ||
      image.startsWith("https://cdn.pixabay.com/");

    return isLocalAsset || isRemoteImage;
  };

  const validateForm = (formData: FormData) => {
    const nextErrors: FieldErrors = {};

    const title = String(formData.get("title") || "").trim();
    const excerpt = String(formData.get("excerpt") || "").trim();
    const category = String(formData.get("category") || "").trim();
    const date = String(formData.get("date") || "").trim();
    const readTime = String(formData.get("readTime") || "").trim();
    const content = String(formData.get("content") || "").trim();

    if (!title) nextErrors.title = "Title is required.";
    if (!excerpt) nextErrors.excerpt = "Excerpt is required.";
    if (!category) nextErrors.category = "Category is required.";
    if (!date) nextErrors.date = "Date is required.";
    if (!readTime) nextErrors.readTime = "Read time is required.";
    if (!content) nextErrors.content = "Content is required.";

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const imageInput = form.elements.namedItem(
      "image",
    ) as HTMLInputElement | null;

    if (imageInput && !isValidImageValue(imageInput.value)) {
      imageInput.value = getRandomDefaultImage();
    }

    const formData = new FormData(form);
    const nextErrors = validateForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setErrors(nextErrors);

      const firstErrorField = Object.keys(nextErrors)[0];
      const firstField = form.elements.namedItem(firstErrorField);

      if (firstField instanceof HTMLElement) {
        firstField.focus();
      }

      return;
    }

    setErrors({});
  };

  const inputClass = (field: keyof FieldErrors) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition ${
      errors[field]
        ? "border-red-500 bg-red-50 focus:border-red-600"
        : "border-[#d8c6df]/80 focus:border-[#7d9b70]"
    }`;

  const textareaClass = (field: keyof FieldErrors, extra = "") =>
    `w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm outline-none transition ${
      errors[field]
        ? "border-red-500 bg-red-50 focus:border-red-600"
        : "border-[#d8c6df]/80 focus:border-[#7d9b70]"
    } ${extra}`;

  const ErrorMessage = ({ message }: { message?: string }) => {
    if (!message) return null;

    return <p className="mt-2 text-sm font-semibold text-red-600">{message}</p>;
  };

  return (
    <form
      action={createAction}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/80 p-6 shadow-[0_10px_28px_rgba(76,51,88,0.05)]"
    >
      {Object.keys(errors).length > 0 && (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          Please fix the highlighted fields before creating the blog post.
        </div>
      )}

      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
            Title
          </label>
          <input
            name="title"
            type="text"
            placeholder="Gentle Herbal Wellness for Everyday Life"
            className={inputClass("title")}
          />
          <ErrorMessage message={errors.title} />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
            Slug
          </label>
          <input
            name="slug"
            type="text"
            placeholder="gentle-herbal-wellness"
            className="w-full rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm outline-none focus:border-[#7d9b70]"
          />
          <p className="mt-1 text-xs text-[#8b6a99]">
            Optional. If empty, it will be created from the title.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
            Excerpt
          </label>
          <textarea
            name="excerpt"
            rows={3}
            placeholder="Short summary shown on the blog card."
            className={textareaClass("excerpt")}
          />
          <ErrorMessage message={errors.excerpt} />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
              Category
            </label>
            <input
              name="category"
              type="text"
              placeholder="Herbal Wellness"
              className={inputClass("category")}
            />
            <ErrorMessage message={errors.category} />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
              Date
            </label>
            <input
              name="date"
              type="text"
              placeholder="June 2026"
              className={inputClass("date")}
            />
            <ErrorMessage message={errors.date} />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
              Read Time
            </label>
            <input
              name="readTime"
              type="text"
              placeholder="4 min read"
              className={inputClass("readTime")}
            />
            <ErrorMessage message={errors.readTime} />
          </div>
        </div>

        <BlogImagePicker />

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
            Content
          </label>
          <textarea
            name="content"
            rows={10}
            placeholder={
              "Write each paragraph on its own line.\n\nSecond paragraph here.\n\nThird paragraph here."
            }
            className={textareaClass("content", "leading-7")}
          />
          <ErrorMessage message={errors.content} />
        </div>

        <label className="flex items-center gap-3 rounded-xl border border-[#d8c6df]/70 bg-[#fffaf5] px-4 py-3 text-sm text-[#6f5b75]">
          <input
            name="published"
            type="checkbox"
            className="h-4 w-4 accent-[#906198]"
          />
          Publish this post
        </label>
      </div>

      <SubmitButton
        pendingText="Creating post..."
        className="mt-6 w-full rounded-full border border-[#7d9b70] bg-[#906198] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8f6ca1]"
      >
        Create Blog Post
      </SubmitButton>
    </form>
  );
};

export default CreateBlogPostForm;
