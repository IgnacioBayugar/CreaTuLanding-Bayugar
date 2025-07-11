const formatPrice = (price) => {
  return price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    currencyDisplay: "symbol",
  });
};

export default formatPrice;