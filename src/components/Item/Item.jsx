import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import formatPrice from "../../helpers/FormatPrice";
import "./Item.scss";

function Item({ item }) {
  return (
    <Card className="idb-itemcard shadow-sm">
      <Card.Img
        src={item.image}
        alt={item.name}
        className="idb-itemcard__img"
      />
      <Card.Body className="idb-itemcard__body d-flex flex-column">
        <Card.Title className="idb-itemcard__title">{item.name}</Card.Title>
        <Card.Text className="idb-itemcard__desc text-muted">
          {item.description ? `${item.description.slice(0, 80)}...` : "Sin descripción"}
        </Card.Text>
        <div className="idb-itemcard__footer d-flex justify-content-between align-items-center mt-2">
          <span className="idb-itemcard__price fw-bold">{formatPrice(item.price)}</span>
          <Button as={Link} to={`/item/${item.id}`} variant="primary" size="sm">
            Ver más
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;