import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Swal from "sweetalert2";

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
    <li>
      {item.name} x {item.quantity} - ${item.price * item.quantity}
      <button onClick={handleRemove}>Eliminar</button>
    </li>
  );
};

export default CartItem;