import Item from "../Item/Item";
import { Col } from "react-bootstrap";

function ItemList({ items }) {
  return (
    <>
      {items.map(item => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
          <Item item={item} />
        </Col>
      ))}
    </>
  );
}

export default ItemList;