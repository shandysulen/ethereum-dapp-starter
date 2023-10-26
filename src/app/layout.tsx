import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { AxiomWebVitals } from "next-axiom";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/Toaster";
import { Footer } from "./_components/Footer";
import { LoadingBar } from "./_components/LoadingBar";
import { Navbar } from "./_components/Navbar";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "Ethereum Dapp Starter",
  description: "A strong foundation for your next unicorn project.",
  generator: "Next.js",
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Ethereum Dapp Starter",
    description: "A strong foundation for your next unicorn project.",
    url: `https://${process.env.VERCEL_URL}`,
    siteName: "Ethereum Dapp Starter",
    locale: "en_US",
    type: "website",
    images: [],
  },
  themeColor: "#FFFFFF",
  title: {
    template: "%s | Ethereum Dapp Starter",
    default: "A strong foundation for your next unicorn project.",
  },
  twitter: {
    card: "summary_large_image",
    title: "A strong foundation for your next unicorn project.",
    description: "A strong foundation for your next unicorn project.",
    creator: "",
    creatorId: "",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <LoadingBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </Providers>
        <Analytics />
        <AxiomWebVitals />
      </body>
    </html>
  );
}
