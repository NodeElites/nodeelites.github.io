import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content="NodeElites" />
        <meta name="description" content="NodeElites is a vibrant developers community where developers share knowledge, collaborate on projects, and grow their skills, fostering an inclusive, supportive environment committed to open-source" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nodeelites.github.io/" />
        <meta property="og:title" content="NodeElites" />
        <meta property="og:description" content="NodeElites is a vibrant developers community where developers share knowledge, collaborate on projects, and grow their skills, fostering an inclusive, supportive environment committed to open-source" />
        <meta property="og:image" content="https://nodeelites.github.io/linkpreview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nodeelites.github.io/" />
        <meta name="twitter:title" content="NodeElites" />
        <meta name="twitter:description" content="NodeElites is a vibrant developers community where developers share knowledge, collaborate on projects, and grow their skills, fostering an inclusive, supportive environment committed to open-source" />
        <meta name="twitter:image" content="https://nodeelites.github.io/linkpreview.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}