import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../firebase/db";
import "./NavBar.scss";

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <Navbar expand="lg" className="idb-navbar">
      <Container fluid className="idb-navbar__container">
        <Navbar.Brand as={Link} to="/" className="idb-navbar__title">
          Vastara
        </Navbar.Brand>
        <Nav className="idb-navbar__nav">
          <NavDropdown
            title="Categorías"
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