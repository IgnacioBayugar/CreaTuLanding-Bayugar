import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar bg="dark-subtle" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Tecnologia</Nav.Link>
            <Nav.Link href="#productos">Hogar</Nav.Link>
            <Nav.Link href="#contacto">Deportes</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;