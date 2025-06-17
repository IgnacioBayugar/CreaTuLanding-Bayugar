import { useState } from "react";

function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="d-flex align-items-center gap-2 mt-3">
      <button
        className="btn btn-outline-secondary"
        onClick={handleSubtract}
        disabled={count <= 1}
        type="button"
      >
        -
      </button>
      <input
        type="text"
        className="form-control text-center"
        style={{ width: "3rem" }}
        value={count}
        readOnly
      />
      <button
        className="btn btn-outline-secondary"
        onClick={handleAdd}
        disabled={count >= stock}
        type="button"
      >
        +
      </button>
      <button
        className="btn btn-success ms-3"
        onClick={() => onAdd(count)}
        type="button"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;