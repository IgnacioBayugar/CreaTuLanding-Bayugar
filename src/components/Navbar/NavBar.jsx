import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCategories } from "../../firebase/db";
import "./NavBar.scss";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  // detecta si la ruta actual es una categoría y extrae el nombre de la categoría activa
  const isCategoryRoute = location.pathname.startsWith("/category/");
  const activeCategory = isCategoryRoute
    ? decodeURIComponent(location.pathname.split("/category/")[1])
    : null;

  return (
    <Navbar expand="lg" className="idb-navbar">
      <Container fluid className="idb-navbar__container">
        <Navbar.Brand as={Link} to="/" className="idb-navbar__title">
          Vastar
        </Navbar.Brand>
        <Nav className="idb-navbar__nav">
          <NavDropdown
            title={activeCategory ? activeCategory : "Categorías"}
            id="basic-nav-dropdown"
            className="idb-navbar__dropdown"
            menuVariant="light"
          >
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
      </Container>
    </Navbar>
  );
}

export default NavBar;