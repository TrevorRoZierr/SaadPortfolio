import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoUp from "./components/GoUp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sayyed Saad ~ Full Stack Dev.",
  description:
    "Portfolio made from scratch as usual, check all the projects...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
          <GoUp />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
