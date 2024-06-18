import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
    <header className="container">
      <div className="row">
        <div className="col-md-1">
          <a href="#" className="navbar-toggler" type="button" id="menu-toggle">
            <i className="bi bi-list text-dark"></i>
          </a>
        </div>
      
        <div className="col-md-9">
          {/* <div className="header banner_title"> */}
            <Link href={"/"}><h1>Les Potes En Ciel</h1></Link>
          {/* </div> */}
        </div>

        <div className="col-md-1">
          <div className="d-flex align-items-center">
            <Link href={"/login"} className="mr-3">
              <i className="bi bi-person-circle text-dark"></i>
            </Link>
          </div>
        </div>

        <div className="col-md-1">
          <a className="btn btn-link text-dark dropdown-toggle" href="#" role="button" id="languageDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="bi bi-globe"></i>
          </a>
          <div className="dropdown-menu" aria-labelledby="languageDropdown">
            <a className="dropdown-item" href="#">Français</a>
            <a className="dropdown-item" href="#">English</a>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

export default Navbar;