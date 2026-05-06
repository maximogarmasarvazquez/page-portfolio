import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import SideNavigation from "@/components/SideNavigation";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Maximo Vazquez | Full Stack Developer",
  description:
    "Portfolio de Maximo Vazquez, desarrollador full stack especializado en React, Node.js y aplicaciones web modernas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`
          ${urbanist.variable}
          font-sans
          antialiased
          bg-[#0B0B0B]
          text-white
        `}
      >
      <Navbar />
      <SideNavigation />
      <Header />
      {children}
      </body>
    </html>
  );
}