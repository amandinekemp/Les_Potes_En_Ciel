import Image from "next/image";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
    <header>
      <div className={[style.header, style.banner_title, ""].join(" ")}>
        <h1>Les Potes En Ciel</h1>
      </div>
      <div className="d-flex justify-content-between align-items-center p-3">
          <a href="#" className="navbar-toggler" type="button" id="menu-toggle">
              <i className="bi bi-list text-dark"></i>
          </a>
          <div className="d-flex align-items-center">
              <a href="#" className="mr-3"><i className="bi bi-person-circle text-dark"></i></a>
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
      <div className={style.banner}>
          <Image src="/banner_lpec.jpg" alt="Banner Image" className={[style.banner_img, "img-fluid"].join(" ")} width={0} height={0}/>
          <Image src="/logo_lpec.png" alt="Logo" className={style.logo} width={0} height={0}/>
      </div>
    </header>
    </>
  );
}

export default Navbar;