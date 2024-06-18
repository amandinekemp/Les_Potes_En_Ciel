import Navbar from "./_components/navbar/Navbar";
import Footer from "./_components/footer/Footer";

// These styles apply to every route in the application
// Library styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// App styles
import "./globals.css";
import "./_components/navbar/Navbar.css";
import "./_components/footer/Footer.css";
import "./_components/carousel/CarouselComponent.css";


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
