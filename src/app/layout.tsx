import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const body = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

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
    icon: "/assets/logo.jpg",
    shortcut: "/assets/logo.jpg",
    apple: "/assets/logo.jpg",
  },

  openGraph: {
    title: "Home | Purple Leaf Herbs Herbalist Holistic Nutrition Coach",
    description:
      "Herbal education, nutrition coaching, natural products, and gentle lifestyle support rooted in plant wisdom.",
    url: siteUrl,
    siteName: "Purple Leaf Herbs",
    images: [
      {
        url: "/assets/hero-herb.jpg",
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
    images: ["/assets/hero-herb.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${serif.variable}`}>
        {children}
      </body>
    </html>
  );
}