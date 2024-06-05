import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css"
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NodeElites",
  description: "NodeElites is a community-driven platform for top-tier developers, fostering collaboration and innovation in web development.",
  keywords: ["NodeElites", "Node.js", "JavaScript", "web development", "community", "collaboration", "innovation"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}