import { Badge } from 'react-bootstrap';

const CartWidget = () => {
  return (
    <div>
      <span>🛒</span>
      <Badge pill bg="danger">0</Badge>
    </div>
  );
};

export default CartWidget;