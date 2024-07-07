import { Metadata } from 'next';
import Image from 'next/image';
import CarouselCmpt from '../_components/carousel/CarouselCmpt';
import logo_img from '/public/logo_lpec.png';

export const metadata: Metadata = {
  title: "Les potes en ciel",
  description: "Page d'accueil des potes en ciel",
};

export default function HomePage() {
  return (
    <>
      {/* Banner and logo */}
      <div className="banner">
          <Image src={logo_img} alt="LPEC logo" className="bannerLogo" />
      </div>

      {/* Mission Section */}
      <section className="mission text-center py-5 px-2">
          <h2>Notre Mission</h2>
          <p>Depuis 2006, Les Potes en Ciel s&apos;engage à promouvoir l&apos;accueil inconditionnel de l&apos;enfant et de son entourage. Nous offrons un lieu alternatif aux familles, un espace où la liberté et la solidarité sont au coeur de nos actions.</p>
      </section>

      {/* Planning Image Section */}
      <section className="planning py-5">
        <div className="container">
          <Image src={"/planning/planning_2024_S28.svg"} alt="planning_2024_S28" width={800} height={500}></Image>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities py-5">
        <div className="container">
          <CarouselCmpt/>
        </div>
      </section>
    </>
  );
}
