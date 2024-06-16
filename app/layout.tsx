import type { Metadata } from "next";
import Navbar from "./_components/navbar/Navbar";
import Footer from "./_components/footer/Footer";

// These styles apply to every route in the application
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";
import "./_components/footer/Footer.css";


export const metadata: Metadata = {
  title: "Les potes en ciel",
  description: "Description des potes en ciel",
};

export default function RootLayout({
  children: mypage,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar/>
        {mypage}
        <Footer/>
      </body>
    </html>
  );
}
