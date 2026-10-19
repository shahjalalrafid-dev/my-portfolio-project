import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#080b11",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shahjalalrafid-dev.github.io"),
  title: "Md. Shahjalal Rafid | Full Stack & Frontend Web Developer",
  description:
    "Portfolio of Md Shahjalal Rafid — BUET Civil Engineering graduate & former Banking Senior Officer turned Full Stack Web Developer specializing in React, Next.js, and modern MERN architecture.",
  keywords: [
    "Md Shahjalal Rafid",
    "Frontend Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "BUET Civil Engineering",
    "Portfolio",
    "Creative IT Institute",
  ],
  authors: [{ name: "Md. Shahjalal Rafid" }],
  creator: "Md. Shahjalal Rafid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahjalalrafid-dev.github.io",
    title: "Md. Shahjalal Rafid | Full Stack Web Developer",
    description:
      "Explore projects, technical skills, and career journey of Md Shahjalal Rafid. React, Next.js, Node.js, and engineering precision.",
    siteName: "Md. Shahjalal Rafid Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 1000,
        alt: "Md. Shahjalal Rafid - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Shahjalal Rafid | Full Stack Web Developer",
    description:
      "Explore projects, technical skills, and career journey of Md Shahjalal Rafid.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#080b11] text-[#e5e7eb] font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
        {children}
      </body>
    </html>
  );
}
