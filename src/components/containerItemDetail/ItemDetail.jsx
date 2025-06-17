import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import './ItemDetail.scss';

function ItemDetail() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://dummyjson.com/products/${itemId}`)
        .then(res => res.json())
        .then(data => setItem(data));
    }, 500);
  }, [itemId]);

  if (!item) return <div className="text-center mt-5">Cargando...</div>;

  const handleAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} unidades al carrito`);
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <div className="item-detail-img">
          <img src={item?.thumbnail} alt={item?.title} />
        </div>
        <div className="item-detail-info">
          <h2>{item?.title}</h2>
          <p className="item-detail-desc">{item?.description}</p>
          <div className="item-detail-price">${item?.price}</div>
          <ItemCount stock={item?.stock} initial={1} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;