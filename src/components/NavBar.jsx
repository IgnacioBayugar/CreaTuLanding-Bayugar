import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(cat => setCategories(cat));
  }, []);

  return (
    <Navbar expand="lg" className="idb-navbar">
      <Container fluid className="idb-navbar__container">
        <Navbar.Brand as={Link} to="/" className="idb-navbar__title">
          Vastara
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto idb-navbar__nav">
            <NavDropdown
              title="Categorias"
              id="basic-nav-dropdown"
              className="idb-navbar__dropdown"
            >
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
          <div className="idb-navbar__cart">
            <CartWidget />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;