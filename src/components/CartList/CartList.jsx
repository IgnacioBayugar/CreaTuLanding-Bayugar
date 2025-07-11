import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import formatPrice from "../../helpers/FormatPrice";
import "./CartList.scss";

const CartList = () => {
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0)
    return <div className="idb-cartlist__empty">El carrito está vacío.</div>;

  const handleClearCart = () => {
    Swal.fire({
      title: "¿Vaciar carrito?",
      text: "¿Seguro que deseas eliminar todos los productos del carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vacío", "Todos los productos fueron eliminados.", "success");
      }
    });
  };

  return (
    <section className="idb-cartlist">
      <h2 className="idb-cartlist__title">Carrito</h2>
      <ul className="idb-cartlist__items">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="idb-cartlist__total">Total: {formatPrice(cartTotal)}</div>
      <div className="idb-cartlist__actions">
        <button onClick={handleClearCart} className="idb-cartlist__btn idb-cartlist__btn--clear">
          Vaciar carrito
        </button>
        <button
          onClick={() => navigate("/checkout")}
          className="idb-cartlist__btn idb-cartlist__btn--checkout"
        >
          Finalizar compra
        </button>
      </div>
    </section>
  );
};

export default CartList;