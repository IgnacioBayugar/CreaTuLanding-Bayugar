import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import CartContext from "../../context/CartContext";
import { getProductById } from "../../firebase/db";
import Swal from "sweetalert2";
import formatPrice from "../../helpers/FormatPrice";
import "./ItemDetailContainer.scss";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then(setItem)
      .finally(() => setLoading(false));
    setAdded(false); // Reset al cambiar de producto
  }, [itemId]);

  if (loading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div
          className="spinner-border text-warning"
          role="status"
          style={{ width: 48, height: 48 }}
        >
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (!item)
    return <div className="text-center mt-5">Producto no encontrado</div>;

  const handleAdd = (cantidad) => {
    addToCart(item, cantidad);
    setAdded(true);
    Swal.fire(
      "¡Agregado!",
      `Agregaste ${cantidad} unidad${cantidad > 1 ? "es" : ""} al carrito.`,
      "success"
    );
  };

  return (
    <div className="idb-itemdetail">
      <div className="idb-itemdetail__img-wrapper">
        <img
          src={item.image}
          alt={item.name}
          className="idb-itemdetail__img"
        />
      </div>
      <div className="idb-itemdetail__info">
        <h2 className="idb-itemdetail__title">{item.name}</h2>
        <p className="idb-itemdetail__desc">{item.description}</p>
        <div className="idb-itemdetail__price">{formatPrice(item.price)}</div>
        {!added ? (
          <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
        ) : (
          <button
            className="idb-checkout__btn idb-checkout__btn--secondary"
            style={{ background: "#F97316", color: "#fff", marginTop: "1rem" }}
            onClick={() => navigate("/")}
          >
            Seguir comprando
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemDetailContainer;