import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/common/components/layouts";
import { title, description, image } from '@/common/constant/siteInfo';
import { keywords } from '@/common/constant/siteInfo';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title,
  description,
  keywords,
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  openGraph:{
    type: "website",
    title,
    description,
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    siteName: title,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
        type: "image/jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  icons: {
    icon: "/images/image.png",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider attribute='class' defaultTheme='dark'>
         <Layout>
              {children}
            </Layout>
            <Analytics />
         </ThemeProvider>

      </body>
    </html>
  );
}
