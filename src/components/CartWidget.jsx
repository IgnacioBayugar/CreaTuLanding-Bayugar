import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="btn btn-primary position-relative">
      <i className="bi bi-cart3"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cartQuantity}
      </span>
    </Link>
  );
};

export default CartWidget;