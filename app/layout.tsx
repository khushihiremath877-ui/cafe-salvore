import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar"; // Correct path to your nested components folder
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SALVORE | Luxury Roastery Sanctuary",
  description: "Structural acoustic precision meets single-estate fluid mastery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={`${inter.className} bg-salvore-dark text-salvore-cream antialiased relative`}>
        {/* The floating menu wrapper sits globally outside the panel tracking engine */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}