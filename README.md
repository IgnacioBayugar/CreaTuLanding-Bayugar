# Vastara E-commerce

Vastara es un e-commerce desarrollado con **React** y **Firebase Firestore** como base de datos. Permite navegar un catálogo de productos, filtrar por categorías, ver detalles, agregar productos al carrito y realizar compras, todo con una experiencia simple y fluida.

---

## 🚀 Características principales

- **Catálogo dinámico:** Productos y categorías obtenidos en tiempo real desde Firestore.
- **Detalle de producto:** Vista individual con descripción, imagen, precio y stock.
- **Carrito de compras:** Estado global con Context API, permite agregar, eliminar y vaciar productos.
- **Formulario de compra:** Validación de datos, generación de orden y feedback visual.
- **Navegación SPA:** React Router para navegar entre Home, Categorías, Detalle, Carrito y Checkout sin recargar la página.
- **Feedback al usuario:** Loaders, mensajes de éxito/error y SweetAlert para acciones importantes.
- **Estilos modernos:** SASS y Bootstrap, con paleta personalizada (azul y naranja).
- **Responsive:** Adaptado para desktop y mobile.

---

## 🛒 Funcionalidades

- Navegación por catálogo, categorías, detalle, carrito y checkout.
- Agregar, eliminar y vaciar productos del carrito.
- Formulario de compra validado y generación de orden en Firestore.
- Feedback visual y mensajes de estado (cargando, sin stock, carrito vacío, etc.).

---

## 🛠️ Tecnologías utilizadas

- React
- React Router
- Firebase Firestore
- React Bootstrap
- SASS
- SweetAlert2

---

## 📁 Estructura de carpetas

```bash
/public
  /images
  index.html
/src
  /components
    /Cart
    /Checkout
    /Home
    /ProductDetail
    /Products
  /context
  /hooks
  /styles
  App.js
  index.js
```

---

## ⚙️ Instalación y ejecución

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tuusuario/tu-repo.git
   cd tu-repo
   ```

---

## 📦 Buenas prácticas

- Componentes divididos en contenedores (lógica) y presentacionales (UI).
- Estado global del carrito con Context API.
- Nombres de archivos, variables y funciones claros y consistentes.
- Sin lógica de UI en el context.