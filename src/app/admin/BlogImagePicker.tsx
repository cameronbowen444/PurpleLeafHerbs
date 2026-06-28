"use client";

import { useMemo, useState } from "react";

export const assetImages = [
  {
    label: "Balance / Wellness",
    value: "/assets/service-bal.jpg",
  },
  {
    label: "Herb Close-Up",
    value: "/assets/service-herb.jpg",
  },
  {
    label: "Herbs",
    value: "/assets/service-herbs.jpg",
  },
  {
    label: "Life",
    value: "/assets/service-life.jpg",
  },
  {
    label: "Lifestyle",
    value: "/assets/service-lifestyle.jpg",
  },
  {
    label: "Natural Wellness",
    value: "/assets/service-nat.jpg",
  },
  {
    label: "Nutrition",
    value: "/assets/service-nut.jpg",
  },
  {
    label: "Products",
    value: "/assets/service-products.jpg",
  },
  {
    label: "Service Herbs",
    value: "/assets/service.herbs.jpg",
  },
];

type BlogImagePickerProps = {
  initialImage?: string;
};

const BlogImagePicker = ({ initialImage = "" }: BlogImagePickerProps) => {
  const initialAssetExists = assetImages.some(
    (image) => image.value === initialImage
  );

  const [mode, setMode] = useState<"asset" | "url">(
    initialImage && !initialAssetExists ? "url" : "asset"
  );

  const [selectedAsset, setSelectedAsset] = useState(
    initialAssetExists ? initialImage : assetImages[0].value
  );

  const [customUrl, setCustomUrl] = useState(
    initialImage && !initialAssetExists ? initialImage : ""
  );

  const finalImageValue = useMemo(() => {
    return mode === "asset" ? selectedAsset : customUrl;
  }, [mode, selectedAsset, customUrl]);

  const previewImage = finalImageValue.trim();

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#6f5b75]">
        Blog Image
      </label>

      <div className="mb-4 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setMode("asset")}
          className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
            mode === "asset"
              ? "border-[#7d9b70] bg-[#f1f6ee] text-[#3b243f]"
              : "border-[#d8c6df]/80 bg-white text-[#6f5b75]"
          }`}
        >
          Choose from site images
        </button>

        <button
          type="button"
          onClick={() => setMode("url")}
          className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
            mode === "url"
              ? "border-[#7d9b70] bg-[#f1f6ee] text-[#3b243f]"
              : "border-[#d8c6df]/80 bg-white text-[#6f5b75]"
          }`}
        >
          Paste image link
        </button>
      </div>

      {mode === "asset" ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {assetImages.map((image) => {
            const isSelected = selectedAsset === image.value;

            return (
              <button
                key={image.value}
                type="button"
                onClick={() => setSelectedAsset(image.value)}
                className={`flex items-center gap-3 rounded-xl border p-2 text-left transition ${
                  isSelected
                    ? "border-[#7d9b70] bg-[#f1f6ee] shadow-[0_8px_22px_rgba(76,51,88,0.08)]"
                    : "border-[#d8c6df]/80 bg-white hover:border-[#7d9b70]"
                }`}
              >
                <img
                  src={image.value}
                  alt={image.label}
                  className="h-14 w-16 rounded-lg object-cover"
                />

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#3b243f]">
                    {image.label}
                  </p>

                  <p className="truncate text-xs text-[#8b6a99]">
                    {image.value}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <input
          type="url"
          value={customUrl}
          onChange={(e) => setCustomUrl(e.target.value)}
          placeholder="https://images.unsplash.com/..."
          className="w-full rounded-xl border border-[#d8c6df]/80 bg-white px-4 py-3 text-sm outline-none focus:border-[#7d9b70]"
        />
      )}

      <input type="hidden" name="image" value={finalImageValue} />

      {previewImage ? (
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#d8c6df]/70 bg-[#fffaf5] p-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8f6ca1]">
            Image Preview
          </p>

          <img
            src={previewImage}
            alt="Blog image preview"
            className="h-64 w-full rounded-xl object-cover"
          />

          <p className="mt-2 break-all text-xs text-[#8b6a99]">
            {previewImage}
          </p>
        </div>
      ) : (
        <p className="mt-2 text-xs text-[#8b6a99]">
          Paste an image link to preview it. If left empty or invalid, a default
          site image will be used.
        </p>
      )}
    </div>
  );
};

export default BlogImagePicker;