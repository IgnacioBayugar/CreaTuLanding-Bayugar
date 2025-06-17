import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(cat => setCategories(cat));
  }, []);

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">Vastara</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">
                Todas las categorías
              </NavDropdown.Item>
              {categories.map((categoryName) => (
                <NavDropdown.Item
                  key={categoryName}
                  as={Link}
                  to={`/category/${encodeURIComponent(categoryName)}`}
                >
                  {categoryName}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;