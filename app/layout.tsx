import Header from "../components/Header";
import Footer from "../components/Footer";


// CSS Styles
import "@/styles/clear.css";
import "@/styles/comman.css";
import "@/styles/sm-clean.css";
import "@/styles/globals.css";
import "@/styles/our-styles.css";

// Types
import type { Metadata } from "next";

/*
  about
  blog (the quote is broken
  gallery
  contact 
*/

// --------------

// Metadata of the website (used to inprove SEO of the website)
export const metadata: Metadata = {
  title: "Opta - Minimal Portfolio and Photography Nextjs Template",
  description: "Claires Bookstore",
  keywords: ["HTML", "CSS", "Javascript", "Typescript", "React", "nextjs"],
  authors: [
    {
      name: "Claire K Zada",
      url: "https://www.ClaireKZada.com/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
