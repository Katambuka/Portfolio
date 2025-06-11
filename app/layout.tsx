import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Nathane's Portfolio and Resume",
  
  description: "Nathane Kanyesigye is a skilled full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. Explore portfolio projects, technical skills, and professional experience in web development, infrastructure engineering, and database administration.",
  keywords: [
    "Full-stack developer",
    "React developer",
    "Next.js expert",
    "Web development",
    "Portfolio",
    "JavaScript developer",
    "Node.js developer",
    "Frontend engineer",
    "Database administrator",
    "Infrastructure engineer",
    "Junior product support engineer"
  ],
  authors: [{ name: "Nathane Kanyesigye" }],
  creator: "Nathane Kanyesigye",
  publisher: "Nathane Kanyesigye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
         <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore the portfolio, projects, and professional journey of Nathane Kanyesigye — a passionate developer building modern web experiences." />
        <meta name="keywords" content="Nathane Kanyesigye, web developer, portfolio, frontend developer, modern web design, React, TypeScript" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}