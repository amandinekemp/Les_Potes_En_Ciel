import Navbar from "./_components/navbar/NavbarCmpt";
import FooterCmpt from "./_components/footer/FooterCmpt";


// Import global and component-specific styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./bootstrap.scss";
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// App styles
import "./globals.css";
import './landing_page.css';

/** RootLayout sets up the layout with Navbar, page content, and Footer **/

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
