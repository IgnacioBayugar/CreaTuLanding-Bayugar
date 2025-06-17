import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import ItemList from "./ItemList";
import "./ItemListContainer.scss";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const url = categoryName
      ? `https://dummyjson.com/products/category/${encodeURIComponent(categoryName)}`
      : 'https://dummyjson.com/products';
    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data.products));
  }, [categoryName]);

  return (
    <Container className="mt-4">
      <Row className="g-4">
        <ItemList items={items} />
      </Row>
    </Container>
  );
}

export default ItemListContainer;