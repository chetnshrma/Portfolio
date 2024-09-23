import { Container, Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="assets/logo.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="custom-navbar">
          <Nav className="mx-auto">
            <Nav.Link
              active={location.pathname === "/about" && true}
              href="/about"
              className="navbar-text"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/portfolio"
              className="navbar-text"
              active={location.pathname === "/portfolio" && true}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="navbar-text"
              active={location.pathname === "/contact" && true}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
