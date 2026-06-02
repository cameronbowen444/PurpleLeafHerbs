import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-VERCEL-LINK.vercel.app"),

  title: "Purple Leaf Herbs | Herbal Wellness & Nutrition Coaching",

  description:
    "Purple Leaf Herbs offers herbal education, nutrition coaching, natural products, and gentle lifestyle support rooted in plant wisdom and holistic wellness.",

  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },

  openGraph: {
    title: "Purple Leaf Herbs | Herbal Wellness & Nutrition Coaching",
    description:
      "Herbal education, nutrition coaching, and gentle lifestyle support rooted in nature.",
    url: "https://YOUR-VERCEL-LINK.vercel.app",
    siteName: "Purple Leaf Herbs",
    images: [
      {
        url: "/assets/hero-herb.png",
        width: 1200,
        height: 630,
        alt: "Purple Leaf Herbs herbal wellness and nutrition coaching",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Purple Leaf Herbs | Herbal Wellness & Nutrition Coaching",
    description:
      "Herbal education, nutrition coaching, and gentle lifestyle support rooted in nature.",
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