import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

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
      <Row className="g-4 justify-content-center">
        {items.map(item => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={item.thumbnail}
                style={{ height: "100%", objectFit: "cover" }}
                alt={item.title}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {item.description.slice(0, 60)}...
                </Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span className="fw-bold">${item.price}</span>
                  <Button as={Link} to={`/item/${item.id}`} variant="primary" size="sm">
                    Ver detalle
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemListContainer;