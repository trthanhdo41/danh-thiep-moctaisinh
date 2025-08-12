import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mộc Tái Sinh - Danh Thiếp Số",
  description: "Danh thiếp số chuyên nghiệp của công ty Mộc Tái Sinh - Chuyên cung cấp sản phẩm gỗ tái chế chất lượng cao",
  keywords: "danh thiếp số, mộc tái sinh, gỗ tái chế, thân thiện môi trường",
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
