import { useState } from "react";
import "./ItemCount.scss";

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="idb-itemcount d-flex align-items-center gap-2 mt-3">
      <button
        className="btn idb-itemcount__btn"
        onClick={handleSubtract}
        disabled={count <= 1}
        type="button"
      >
        -
      </button>
      <input
        type="text"
        className="form-control text-center idb-itemcount__value"
        style={{ width: "3rem" }}
        value={count}
        readOnly
      />
      <button
        className="btn idb-itemcount__btn"
        onClick={handleAdd}
        disabled={count >= stock}
        type="button"
      >
        +
      </button>
      <button
        className="btn idb-itemcount__add ms-3"
        onClick={handleAddToCart}
        type="button"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;