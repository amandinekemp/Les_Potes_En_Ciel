import { DropdownDivider, DropdownItem, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex">
      <Container>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#link">Link</NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <DropdownItem href="#action/3.1">Action</DropdownItem>
              <DropdownItem href="#action/3.2">
                Another action
              </DropdownItem>
              <DropdownItem href="#action/3.3">Something</DropdownItem>
              <DropdownDivider />
              <DropdownItem href="#action/3.4">
                Separated link
              </DropdownItem>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
        <NavbarBrand href="#home">React-Bootstrap</NavbarBrand>
      </Container>
    </Navbar>
  );
}

export default BasicExample;