import "server-only";
import { Toaster } from "@eds/components";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Footer } from "./_components/Footer";
import { LoadingBar } from "./_components/LoadingBar";
import { Navbar } from "./_components/Navbar";
import "./globals.css";
import { PostHogPageview, Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

/* MAKE SURE TO FILL THESE OUT */
const name = "Todo app";
const description = "Manage your life.";
/* *************************** */

export const metadata = {
  applicationName: name,
  description,
  generator: "Next.js",
  manifest: "/site.webmanifest",
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
  ),
  openGraph: {
    title: name,
    description,
    url: `https://${process.env.VERCEL_URL}`,
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [],
  },
  title: {
    template: `%s | ${name}`,
    default: description,
  },
  twitter: {
    card: "summary_large_image",
    title: description,
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
        <AxiomWebVitals />
        <Suspense>
          <PostHogPageview />
        </Suspense>
      </body>
    </html>
  );
}
