import type { Metadata } from "next";
import { Bruno_Ace_SC, Cabin } from "next/font/google";
import "./globals.css";

const cabin = Cabin ({
  variable: "--font-cabin",
  subsets: ["latin"],
})

const bruno_ace_sc = Bruno_Ace_SC({
  variable: "--font-bruno-ace-sc",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "ChirOps",
  description: "Desarrollo de software especializado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${bruno_ace_sc.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
