import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Doodle Freaks",

  description: "Your oneshot branding and gfx solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/dc.ico" />
        <title>Doodle Freaks</title>
        <meta name="description" content="Your oneshot branding and gfx solution" />
        
        
      </Head>
      <body className={inter.className}>
        <Navbar className=" " />
        {children}
        
      </body>
    </html>
  );
}