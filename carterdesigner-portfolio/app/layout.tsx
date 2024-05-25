import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Navigation from "./ui/navigation";
import { roboto } from "./ui/font";

export const metadata: Metadata = {
  title: "WEB DEVELOPER",
  description: "The future of web development/web design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="w-screen min-h-screen overflow-hidden overflow-y-scroll"
    >
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body className={`w-full h-full ${roboto.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
