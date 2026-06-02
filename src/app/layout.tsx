import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://purple-leaf-herbs.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Purple Leaf Herbs | Herbalist Holistic Nutrition Coach",
    template: "%s | Purple Leaf Herbs",
  },

  description:
    "Purple Leaf Herbs offers herbal education, nutrition coaching, natural products, and gentle lifestyle support rooted in plant wisdom.",

  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },

  openGraph: {
    title: "Home | Purple Leaf Herbs Herbalist Holistic Nutrition Coach",
    description:
      "Herbal education, nutrition coaching, natural products, and gentle lifestyle support rooted in plant wisdom.",
    url: siteUrl,
    siteName: "Purple Leaf Herbs",
    images: [
      {
        url: "/assets/hero-herb.png",
        width: 1200,
        height: 630,
        alt: "Purple Leaf Herbs herbal wellness and natural products",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Home | Purple Leaf Herbs Herbalist Holistic Nutrition Coach",
    description:
      "Herbal education, nutrition coaching, natural products, and gentle lifestyle support rooted in plant wisdom.",
    images: ["/assets/hero-herb.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}