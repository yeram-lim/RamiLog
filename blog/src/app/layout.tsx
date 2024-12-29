import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Gnb from "../../components/Gnb";
import Container from "../../components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "예람이가 그 땐 뭘 공부했지?",
  description: "개발 공부 기록 블로그입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Gnb></Gnb>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
