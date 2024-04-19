import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WagmiConfig } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { ConectivityProvider } from "./utils";



// wallet start

const projectId = "cba73ada547c01c1a64d7725fb732495";
const chains = [bscTestnet];




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "meta v",
  description: "Meta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
