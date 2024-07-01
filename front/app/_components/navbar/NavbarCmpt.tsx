import { DropdownItem, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarCmpt() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarToggle aria-controls="navbar-links"/>
        <NavbarCollapse id="navbar-links">
          <Nav>
            <NavLink href="/agenda">Agenda</NavLink>
            <NavLink href="/library">Bibliothèque</NavLink>
            <NavDropdown title="Les nouvelles" id="nav-menu-news">
              <DropdownItem href="/news_feed">Actualités</DropdownItem>
              <DropdownItem href="/newsletter">Newsletter</DropdownItem>
            </NavDropdown>
            <NavDropdown title="L'association" id="nav-menu-association">
              <DropdownItem href="/about_us">A propos de nous</DropdownItem>
              <DropdownItem href="/help_us">Nous aider</DropdownItem>
              <DropdownItem href="/contact_us">Contactez nous</DropdownItem>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
        
        <NavbarBrand href="/" className="text-black mx-2 w-auto">
          <Image alt="" src={"/logo_32px.png"} width="30" height="30" className="mx-2"/>
          Les Potes En Ciel
        </NavbarBrand>

        <NavLink href="/login" className="mx-2 navbarIconButton">
          <i className="bi bi-person-circle text-dark"></i>
        </NavLink>

        <NavDropdown title={<i className="bi bi-globe"></i>} className="mx-2 navbarIconButton">
          <DropdownItem href="#todoEN">EN</DropdownItem>
          <DropdownItem href="#todoFR">FR</DropdownItem>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default NavbarCmpt;