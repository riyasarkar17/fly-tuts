import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fly-tuts",
  description: "Learn aviation fundamentals with modern, friendly flight tutorials."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
