import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import { getProducts, filterProducts } from "../../firebase/db";
import ItemList from "./ItemList";
import "./ItemListContainer.scss";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetch = categoryName ? filterProducts(categoryName) : getProducts();
    fetch.then(setItems).finally(() => setLoading(false));
  }, [categoryName]);

  if (loading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div
          className="spinner-border text-warning"
          role="status"
          style={{ width: 48, height: 48 }}
        >
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <Container className="idb-container mt-4">
      <Row className="g-4">
        <ItemList items={items} />
      </Row>
    </Container>
  );
}

export default ItemListContainer;