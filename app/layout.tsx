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
  metadataBase: new URL("https://sufyanaliportfolio.vercel.app"),

  title: {
    default: "Sufyan Ali | Email Marketing Expert & Klaviyo Specialist",
    template: "%s | Sufyan Ali",
  },

  description:
    "Email Marketing Expert and Klaviyo Specialist helping eCommerce brands increase retention, customer lifetime value, and repeat revenue through automated email marketing systems.",

    verification: {
  google: "5T0ZJhjOQjbmWIhZDVBv8mW6_ZhB_kft8Ep4ZBnhpuk",
},
  keywords: [
    "Sufyan Ali",
    "Email Marketing Expert",
    "Klaviyo Expert",
    "Email Marketing Specialist",
    "Email Marketer",
    "Email Marketing Portfolio",
    "Klaviyo Portfolio",
    "eCommerce Email Marketing",
    "Email Automation",
    "Retention Marketing",
    "Lifecycle Marketing",
    "Customer Retention",
    "Email Campaign Management",
    "Klaviyo Automation",
    "Brevo Specialist",
  ],

  authors: [{ name: "Muhammad Sufyan Ali" }],
  creator: "Muhammad Sufyan Ali",

  openGraph: {
    title: "Sufyan Ali | Email Marketing Expert & Klaviyo Specialist",
    description:
      "Portfolio of Muhammad Sufyan Ali showcasing Klaviyo email automation, retention marketing systems, lifecycle campaigns, and eCommerce revenue growth strategies.",
    url: "https://sufyanaliportfolio.vercel.app",
    siteName: "Sufyan Ali Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sufyan Ali | Email Marketing Expert",
    description:
      "Klaviyo Specialist helping eCommerce brands increase retention, customer lifetime value, and repeat revenue.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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