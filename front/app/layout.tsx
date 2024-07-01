import Navbar from "./_components/navbar/NavbarCmpt";
import FooterCmpt from "./_components/footer/FooterCmpt";

// These styles apply to every route in the application
// Library styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// App styles
import "./globals.css";
import "./_components/carousel/CarouselCmpt.css";


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
        <FooterCmpt/>
      </body>
    </html>
  );
}
