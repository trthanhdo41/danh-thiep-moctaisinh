import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cúc Phương - Danh Thiếp Số",
  description: "Danh thiếp số chuyên nghiệp của công ty Cúc Phương - Chuyên cung cấp sản phẩm gỗ tái chế chất lượng cao",
  keywords: "danh thiếp số, cúc phương, gỗ tái chế, thân thiện môi trường",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
