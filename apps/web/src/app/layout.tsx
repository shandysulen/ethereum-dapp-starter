import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import { Toaster } from "@eds/components";

import { Footer } from "./_components/Footer";
import { LoadingBar } from "./_components/LoadingBar";
import { Navbar } from "./_components/Navbar";
import { PostHogPageview, Providers } from "./providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/* MAKE SURE TO FILL THESE OUT */
const name = "Ethereum Dapp Starter";
const description = "Build the future.";
const url = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
/* *************************** */

export const metadata = {
  applicationName: name,
  description,
  generator: "Next.js",
  manifest: "/site.webmanifest",
  metadataBase: new URL(url),
  openGraph: {
    title: name,
    description,
    url,
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [],
  },
  title: {
    template: `%s | ${name}`,
    default: `${name} | ${description}`,
  },
  twitter: {
    card: "summary_large_image",
    title: name,
    description,
    creator: "",
    creatorId: "",
    images: [""],
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
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
        <Suspense>
          <PostHogPageview />
        </Suspense>
      </body>
    </html>
  );
}
