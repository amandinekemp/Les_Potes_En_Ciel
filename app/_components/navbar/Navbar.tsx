import Image from "next/image";

import banner_img from '/public/banner_lpec.jpg';
import logo_img from '/public/logo_lpec.png';
import Link from "next/link";

const Navbar = () => {
  return (
    <>
    <header>
      <div className="header banner_title">
        <Link href={"/"}><h1>Les Potes En Ciel</h1></Link>
      </div>
      <div className="d-flex justify-content-between align-items-center p-3">
        <a href="#" className="navbar-toggler" type="button" id="menu-toggle">
          <i className="bi bi-list text-dark"></i>
        </a>
        <div className="d-flex align-items-center">
          <Link href={"/login"} className="mr-3">
            <i className="bi bi-person-circle text-dark"></i>
          </Link>
          <div className="dropdown">
            <a className="btn btn-link text-dark dropdown-toggle" href="#" role="button" id="languageDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="bi bi-globe"></i>
            </a>
            <div className="dropdown-menu" aria-labelledby="languageDropdown">
              <a className="dropdown-item" href="#">Français</a>
              <a className="dropdown-item" href="#">English</a>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
          <Image src={banner_img} alt="Banner Image" className="banner_img img-fluid" />
          <Image src={logo_img} alt="Logo" className="logo" />
      </div>
    </header>
    </>
  );
}

export default Navbar;