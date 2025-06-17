import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./ItemDetailContainer.scss";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${itemId}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [itemId]);

  if (!item) return <div className="text-center mt-5">Cargando...</div>;

  const handleAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} unidades al carrito`);
  };

  return (
    <div className="idb-itemdetail">
      <div className="idb-itemdetail__img-wrapper">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="idb-itemdetail__img"
        />
      </div>
      <div className="idb-itemdetail__info">
        <h2 className="idb-itemdetail__title">{item.title}</h2>
        <p className="idb-itemdetail__desc">{item.description}</p>
        <div className="idb-itemdetail__price">${item.price}</div>
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;