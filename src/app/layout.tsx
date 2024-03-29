import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Flowmodoro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
