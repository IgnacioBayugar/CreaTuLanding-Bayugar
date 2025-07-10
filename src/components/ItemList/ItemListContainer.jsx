import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import { getProducts, filterProducts } from "../../firebase/db";
import ItemList from "./ItemList";
import "./ItemListContainer.scss";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName) {
      filterProducts(categoryName).then(setItems);
    } else {
      getProducts().then(setItems);
    }
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