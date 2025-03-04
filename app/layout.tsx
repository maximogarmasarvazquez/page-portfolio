import type { Metadata } from "next";
import {  Urbanist } from "next/font/google";
import "./globals.css";


// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "maxivazDEV landing page 💻",
  description: "Landing page made by maxivazDEV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${urbanist.variable} antialiased`}
      >
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
