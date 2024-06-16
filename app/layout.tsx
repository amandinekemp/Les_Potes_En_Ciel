import Navbar from "./_components/navbar/Navbar";
import Footer from "./_components/footer/Footer";
import ImportScripts from "./_components/ImportScripts";

// These styles apply to every route in the application
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";
import "./_components/footer/Footer.css";
import "./_components/carousel/Carousel.css";


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
        <ImportScripts/>
      </body>
    </html>
  );
}
