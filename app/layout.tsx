import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinkShortenerProject",
  description: "Authentication-ready link shortener built with Next.js and Clerk",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider
          appearance={{
            variables: {
              colorBackground: "#1e1e1e",
              colorBorder: "rgba(255, 255, 255, 0.1)",
              colorForeground: "#f5f5f5",
              colorInput: "#181818",
              colorInputForeground: "#f5f5f5",
              colorMuted: "#262626",
              colorMutedForeground: "#b3b3b3",
              colorNeutral: "#f5f5f5",
              colorPrimary: "#f0f0f0",
              colorPrimaryForeground: "#202020",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}