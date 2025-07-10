import './Checkout.scss';
import CartContext from '../../context/CartContext';
import { useContext, useState } from 'react';
import { createOrder } from '../../firebase/db';
import { serverTimestamp } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Tu carrito está vacío",
        text: "Agregá productos antes de finalizar la compra.",
      });
      return;
    }

    Swal.fire({
      title: 'Enviando orden',
      text: 'Por favor aguarde...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    try {
      const orderId = await createOrder({
        name,
        email,
        tel,
        productos: cart,
        time: serverTimestamp()
      });

      if (orderId) {
        Swal.fire({
          icon: "success",
          title: "¡Se registró tu compra!",
          text: `ID de la compra: ${orderId}`,
          didClose: () => {
            clearCart();
            navigate('/');
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al registrar tu compra",
          text: "Intentalo nuevamente más tarde.",
        });
      }
    } catch (err) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Ups, algo salió mal",
        text: err?.message || "No se pudo enviar la orden.",
      });
    }
  };

  return (
    <section className="idb-checkout">
      <div className="idb-checkout__content">
        <h4 className="idb-checkout__title">  Checkout <i className="bi bi-cart3"></i></h4>
        <form
          className="idb-checkout__form"
          onSubmit={handleSubmit}
        >
          <div className="idb-checkout__field">
            <label htmlFor="nombre" className="idb-checkout__label">Nombre</label>
            <input
              type="text"
              className="idb-checkout__input"
              id="nombre"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="idb-checkout__field">
            <label htmlFor="email" className="idb-checkout__label">Email</label>
            <input
              type="email"
              className="idb-checkout__input"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="idb-checkout__field">
            <label htmlFor="tel" className="idb-checkout__label">Teléfono</label>
            <input
              type="text"
              className="idb-checkout__input"
              id="tel"
              placeholder="Teléfono"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              pattern="^\d{5,15}$"
              required
            />
          </div>
          <div className="idb-checkout__actions">
            <button type="submit" className="idb-checkout__btn">
              Comprar
            </button>
            <button
              type="button"
              className="idb-checkout__btn idb-checkout__btn--secondary"
              onClick={() => navigate("/")}
            >
              Seguir comprando
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Checkout;