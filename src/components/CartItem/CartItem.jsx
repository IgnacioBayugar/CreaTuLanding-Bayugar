import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Swal from "sweetalert2";
import formatPrice from "../../helpers/FormatPrice";
import "./CartItem.scss";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleRemove = () => {
    Swal.fire({
      title: "¿Eliminar producto?",
      text: `¿Seguro que deseas eliminar "${item.name}" del carrito?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(item.id);
        Swal.fire("Eliminado", `"${item.name}" fue eliminado del carrito.`, "success");
      }
    });
  };

  return (
    <li className="idb-cartitem">
      <span>
        {item.name} x {item.quantity} - {formatPrice(item.price * item.quantity)}
      </span>
      <button
        className="idb-cartitem__btn idb-cartitem__btn--remove"
        onClick={handleRemove}
        type="button"
      >
        Eliminar
      </button>
    </li>
  );
};

export default CartItem;