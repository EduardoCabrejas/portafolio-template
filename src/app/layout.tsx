import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/navigation";
import ThemeMode from "@/components/Buttons/themes";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/context/themeContext";

export const metadata: Metadata = {
  title: "Eduardo A. Cabrejas",
  description: "Generated by create next app",
  icons:{
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} flex flex-col bg-bgColor relative`}>
      <ThemeProvider>
          <NavBar />
          <main className="min-h-screen">{children}</main>
          <ThemeMode />
        </ThemeProvider>
      </body>
    </html>
  );
}
