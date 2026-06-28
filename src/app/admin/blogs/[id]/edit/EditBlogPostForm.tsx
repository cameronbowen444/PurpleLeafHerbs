"use client";

import { useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import BlogImagePicker, { assetImages } from "@/app/admin/BlogImagePicker";
import SubmitButton from "@/app/admin/SubmitButton";

type BlogPostFormData = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  published: boolean;
};

type EditBlogPostFormProps = {
  post: BlogPostFormData;
  updateAction: (formData: FormData) => void | Promise<void>;
};

type FieldErrors = {
  title?: string;
  slug?: string;
  excerpt?: string;
  category?: string;
  date?: string;
  readTime?: string;
  content?: string;
};

const EditBlogPostForm = ({ post, updateAction }: EditBlogPostFormProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const allowSubmitRef = useRef(false);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

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
    const slug = String(formData.get("slug") || "").trim();
    const excerpt = String(formData.get("excerpt") || "").trim();
    const category = String(formData.get("category") || "").trim();
    const date = String(formData.get("date") || "").trim();
    const readTime = String(formData.get("readTime") || "").trim();
    const content = String(formData.get("content") || "").trim();

    if (!title) nextErrors.title = "Title is required.";
    if (!slug) nextErrors.slug = "Slug is required.";
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
      setIsConfirmOpen(false);
      allowSubmitRef.current = false;

      const firstErrorField = Object.keys(nextErrors)[0];
      const firstField = form.elements.namedItem(firstErrorField);

      if (firstField instanceof HTMLElement) {
        firstField.focus();
      }

      return;
    }

    setErrors({});

    if (!allowSubmitRef.current) {
      event.preventDefault();
      setIsConfirmOpen(true);
      return;
    }

    allowSubmitRef.current = false;
  };

  const confirmSave = () => {
    allowSubmitRef.current = true;
    setIsConfirmOpen(false);
    formRef.current?.requestSubmit();
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
    <>
      <form
        ref={formRef}
        action={updateAction}
        onSubmit={handleSubmit}
        noValidate
        className="rounded-[1.5rem] border border-[#d8c6df]/70 bg-white/80 p-6 shadow-[0_10px_28px_rgba(76,51,88,0.05)]"
      >
        <input type="hidden" name="id" value={post.id} />

        {Object.keys(errors).length > 0 && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            Please fix the highlighted fields before saving changes.
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
              defaultValue={post.title}
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
              defaultValue={post.slug}
              className={inputClass("slug")}
            />
            <ErrorMessage message={errors.slug} />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
              Excerpt
            </label>
            <textarea
              name="excerpt"
              rows={3}
              defaultValue={post.excerpt}
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
                defaultValue={post.category}
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
                defaultValue={post.date}
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
                defaultValue={post.readTime}
                className={inputClass("readTime")}
              />
              <ErrorMessage message={errors.readTime} />
            </div>
          </div>

          <BlogImagePicker initialImage={post.image} />

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
              Content
            </label>
            <textarea
              name="content"
              rows={10}
              defaultValue={post.content}
              className={textareaClass("content", "leading-7")}
            />
            <ErrorMessage message={errors.content} />
          </div>

          <label className="flex items-center gap-3 rounded-xl border border-[#d8c6df]/70 bg-[#fffaf5] px-4 py-3 text-sm text-[#6f5b75]">
            <input
              name="published"
              type="checkbox"
              defaultChecked={post.published}
              className="h-4 w-4 accent-[#906198]"
            />
            Publish this post
          </label>
        </div>

        <SubmitButton
          pendingText="Saving changes..."
          className="mt-6 w-full rounded-full border border-[#7d9b70] bg-[#906198] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8f6ca1]"
        >
          Save Changes
        </SubmitButton>
      </form>

      {isConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#302133]/50 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[1.5rem] border border-[#d8c6df]/70 bg-white p-6 shadow-[0_18px_60px_rgba(48,33,51,0.18)]">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8f6ca1]">
                  Confirm Changes
                </p>

                <h2 className="mt-2 font-serif text-3xl text-[#3b243f]">
                  Save these updates?
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsConfirmOpen(false)}
                className="rounded-full border border-[#d8c6df]/70 p-2 text-[#6f5b75] transition hover:bg-[#fffaf5]"
              >
                <FiX />
              </button>
            </div>

            <p className="text-sm leading-6 text-[#6f5b75]">
              This will update the blog post with your latest changes.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setIsConfirmOpen(false)}
                className="rounded-full border border-[#d8c6df]/80 bg-white px-5 py-3 text-sm font-semibold text-[#6f5b75] transition hover:bg-[#fffaf5]"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={confirmSave}
                className="rounded-full border border-[#7d9b70] bg-[#906198] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8f6ca1]"
              >
                Yes, Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditBlogPostForm;
