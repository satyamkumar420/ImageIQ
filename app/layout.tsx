import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";

const Font = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "ImageIQ",
  description:
    "AI-Powered by ImageIQ, a powerful image processing tool. With ImageIQ, you can create and edit images in just a few clicks. Get started today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/assets/images/logo.png" />
        </head>
        <body
          className={cn("font-IBMPlex antialiased bg-[#0a101e]", Font.variable)}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
