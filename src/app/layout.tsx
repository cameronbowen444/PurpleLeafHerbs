import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const body = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://purple-leaf-herbs.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#906198",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Purple Leaf Herbs",

  title: {
    default: "Purple Leaf Herbs | Herbalist & Holistic Nutrition Coach",
    template: "%s | Purple Leaf Herbs",
  },

  description:
    "Purple Leaf Herbs offers herbal education, holistic nutrition coaching, natural wellness guidance, plant-centered blog notes, and gentle lifestyle support rooted in plant wisdom.",

  keywords: [
    "Purple Leaf Herbs",
    "herbalist",
    "holistic nutrition coach",
    "herbal education",
    "natural wellness",
    "plant-based wellness",
    "herbal remedies",
    "nutrition coaching",
    "holistic lifestyle support",
    "plant wisdom",
  ],

  authors: [{ name: "Purple Leaf Herbs" }],
  creator: "Purple Leaf Herbs",
  publisher: "Purple Leaf Herbs",

  icons: {
    icon: [
      {
        url: "/assets/logo-4.png",
        type: "image/jpeg",
      },
    ],
    shortcut: "/assets/logo-4.png",
    apple: "/assets/logo-4.png",
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Purple Leaf Herbs | Herbalist & Holistic Nutrition Coach",
    description:
      "Herbal education, holistic nutrition coaching, natural wellness guidance, plant-centered blog notes, and gentle lifestyle support rooted in plant wisdom.",
    url: siteUrl,
    siteName: "Purple Leaf Herbs",
    images: [
      {
        url: "/assets/hero.jpg",
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
    title: "Purple Leaf Herbs | Herbalist & Holistic Nutrition Coach",
    description:
      "Herbal education, holistic nutrition coaching, natural wellness guidance, plant-centered blog notes, and gentle lifestyle support rooted in plant wisdom.",
    images: ["/assets/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${body.variable} ${serif.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}