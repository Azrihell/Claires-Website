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


// Metadata of the website (used to improve SEO of the website)
export const metadata: Metadata = {
  title: "Claires Website!",
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
      <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Metamorphous&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Platypi:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
