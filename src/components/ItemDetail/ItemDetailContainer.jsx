import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import CartContext from "../../context/CartContext";
import { getProductById } from "../../firebase/db";
import Swal from "sweetalert2";
import "./ItemDetailContainer.scss";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProductById(itemId).then(setItem);
  }, [itemId]);

  if (!item) return <div className="text-center mt-5">Cargando...</div>;

  const handleAdd = (cantidad) => {
    addToCart(item, cantidad);
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
        <div className="idb-itemdetail__price">${item.price}</div>
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      </div>
    </div>
  );
}

export default ItemDetailContainer; 