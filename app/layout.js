import { Inter } from "next/font/google";
import Nav from "./(component)/shared/Nav";
import "./globals.css";
import Footer from "./(component)/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amelie Salon Bridal Foto",
  description: "Selamat datang di Amelie salon, bridal dan foto Palembang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
