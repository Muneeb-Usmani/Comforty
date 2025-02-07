import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/header/Topbar";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { GlobalProvider } from "./context/GlobalContext";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comforty",
  description: "A marketplace for all your comfort needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <GlobalProvider>
            <Topbar />
            <Header />
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </GlobalProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
