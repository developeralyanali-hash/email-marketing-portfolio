import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Email Marketing That Increases Repeat Revenue for eCommerce Brands",
    template: "%s | Sufyan Ali",
  },

  description:
    "I help eCommerce brands increase repeat revenue using Klaviyo & Brevo email automation, high-converting flows, and lifecycle retention systems.",

  keywords: [
    "Email Marketing",
    "Klaviyo Expert",
    "Brevo Specialist",
    "eCommerce Email Marketing",
    "Email Automation",
    "Retention Marketing",
    "Lifecycle Marketing",
    "Conversion Optimization",
  ],

  authors: [{ name: "Muhammad Sufyan Ali" }],
  creator: "Sufyan Ali - Email Marketing Specialist",

  openGraph: {
    title: "Email Marketing That Drives Repeat Revenue for eCommerce Brands",
    description:
      "High-converting Klaviyo & Brevo automation systems designed to increase retention, LTV, and repeat purchases for eCommerce businesses.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Email Marketing That Increases eCommerce Revenue",
    description:
      "Klaviyo & Brevo expert helping eCommerce brands increase retention & lifetime value.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${spaceGrotesk.variable}
          ${inter.variable}
          antialiased
          scroll-smooth
        `}
      >
        <Navbar />

        <main className="pt-16">{children}</main>

        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}