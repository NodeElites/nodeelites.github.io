import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <title>NodeElites</title>
        <meta name="description" content="NodeElites is a vibrant developers community where developers share knowledge, collaborate on projects, and grow their skills, fostering an inclusive, supportive environment committed to open-source." />
        <meta name="keywords" content="NodeElites, developers community, collaboration, open-source, skill development, inclusive environment, supportive community" />
        <meta name="author" content="NodeElites Community" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="NodeElites" />
        <meta property="og:description" content="NodeElites is a vibrant developers community where developers share knowledge, collaborate on projects, and grow their skills, fostering an inclusive, supportive environment committed to open-source." />
        <meta property="og:image" content="/linkpreview.png" />
        <meta property="og:url" content="https://nodeelites.github.io" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NodeElites" />
        <meta name="twitter:description" content="NodeElites is a vibrant developers community where developers share knowledge, collaborate on projects, and grow their skills, fostering an inclusive, supportive environment committed to open-source." />
        <meta name="twitter:image" content="/linkpreview.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
