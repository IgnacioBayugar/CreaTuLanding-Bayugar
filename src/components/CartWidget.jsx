import { Badge } from 'react-bootstrap';

const CartWidget = () => {
  return (
    <div style={{ position: "relative", display: "inline-block", marginLeft: "1rem" }}>
      <span style={{ fontSize: "1.7rem" }}>🛒</span>
      <Badge
        pill
        bg="danger"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          transform: "translate(40%,-40%)",
          fontSize: "0.7rem"
        }}
      >
        0
      </Badge>
    </div>
  );
};

export default CartWidget;