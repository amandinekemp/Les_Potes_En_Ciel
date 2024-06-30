import { DropdownItem, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarCmpt() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex">
      <Container>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav>
            <NavLink href="/agenda">Agenda</NavLink>
            <NavLink href="/library">Bibliothèque</NavLink>
            <NavDropdown title="Les nouvelles" id="basic-nav-dropdown">
              <DropdownItem href="/news_feed">Actualités</DropdownItem>
              <DropdownItem href="/newsletter">Newsletter</DropdownItem>
            </NavDropdown>
            <NavDropdown title="L'association" id="basic-nav-dropdown">
              <DropdownItem href="/about_us">A propos de nous</DropdownItem>
              <DropdownItem href="/help_us">Nous aider</DropdownItem>
              <DropdownItem href="/contact_us">Contactez nous</DropdownItem>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
        <NavbarBrand href={"/"}>
          <Image
            alt=""
            src={"/logo_32px.png"}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Les Potes En Ciel
        </NavbarBrand>

        <NavLink href="/login">
          <i className="bi bi-person-circle text-dark"></i>
        </NavLink>

        <NavDropdown title={<i className="bi bi-globe"></i>} id="basic-nav-dropdown">
          <DropdownItem href="#action/3.4">En</DropdownItem>
          <DropdownItem href="#action/3.3">Fr</DropdownItem>
        </NavDropdown>
        
      </Container>
    </Navbar>
  );
}

export default NavbarCmpt;