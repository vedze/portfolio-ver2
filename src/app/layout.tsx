import type { Metadata } from "next";
import "@/styles/globals.css";
import localFont from "next/font/local";
import { Overpass, Pacifico } from "next/font/google";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const overpass = Overpass({
  weight: ["400", "500", "600"],
  style: ["italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-overpass",
});

export const metadata: Metadata = {
  title: "이지은 | 포트폴리오",
  description: "안녕하세요 포트폴리오 ver2 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${overpass.variable}`}>
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  );
}
