import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NodeElites",
  description: "NodeElites is a vibrant developers community where developers share knowledge, collaborate on projects, and grow their skills, fostering an inclusive, supportive environment committed to open-source",
  keywords: ["NodeElites", "NodeElites Community" , "Node.js", "JavaScript", "web development", "community", "collaboration", "innovation"],
  openGraph: {
    title: "NodeElites",
    description: "NodeElites is a vibrant developers community where developers share knowledge, collaborate on projects, and grow their skills, fostering an inclusive, supportive environment committed to open-source",
    images: [
      {
        url: "/linkpreview.png",
        width: 500,
        height: 500,
        alt: "NodeElites Community",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />

        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index + 1} property="og:image:width" content={image.width} />
        ))}
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index + 2} property="og:image:height" content={image.height} />
        ))}
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index + 3} property="og:image:alt" content={image.alt} />
        ))}
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}