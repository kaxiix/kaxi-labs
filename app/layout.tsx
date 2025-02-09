import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kaxi labs",
  description: "Discover innovative SaaS solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Discover innovative SaaS solutions" />
        <meta
          name="keywords"
          content="SaaS, software, technology, innovation"
        />
        <meta property="og:title" content="Kaxi Labs" />
        <meta
          property="og:description"
          content="Discover innovative SaaS solutions"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.kaxilabs.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
