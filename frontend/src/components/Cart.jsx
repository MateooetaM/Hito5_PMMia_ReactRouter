import React, { useCallback, useState } from "react";
import { pizzaCart } from "../data/pizzas";
function Cart() {
  const [counts, setCounts] = useState({});
  const handleIncrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 0) - 1, 0),
    }));
  };

  // Calcular el total
  const total = pizzaCart.reduce((acc, cart) => {
    const { id, price } = cart;
    const count = counts[id] || 0;
    return acc + price * count;
  }, 0);

  // Formatear el total como moneda
  const formattedTotal = total.toLocaleString("es-ES", {
    style: "currency",
    currency: "CLP",
  });

  return (
    <div>
      <div>
        <h1 className="text-center mt-3">Carrito de pizza!</h1>
        <h3 className="text-center">
          Estas solo a un paso de disfrutar el autentico sabor del mediterraneo!
        </h3>
        <div className="container d-flex">
          <div className="container d-flex flex-column">
            {pizzaCart.map((cart) => {
              const { id, name, price, img, ingredients } = cart;
              const count = counts[id] || 0; // Obtener el count específico de cada card
              // Formatear el precio como moneda
              const formattedPrice = price.toLocaleString("es-ES", {
                style: "currency",
                currency: "CLP",
              });

              return (
                <div
                  key={id}
                  className="card mb-3"
                  style={{ maxWidth: "540px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={img} className="img-fluid rounded" alt={name} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                          Intredientes:
                          <ul>
                            {ingredients.map((ingredient, i) => (
                              <li key={i}>{ingredient}</li>
                            ))}
                          </ul>
                        </p>
                        <p className="card-text">Precio: ${formattedPrice}</p>
                        <p className="card-text">Cantidad Unidades: {count}</p>
                        <div className="d-flex gap-3">
                          <button
                            onClick={() => handleIncrement(id)}
                            type="button"
                            className="btn btn-secondary"
                          >
                            +
                          </button>
                          <button
                            onClick={() => handleDecrement(id)}
                            type="button"
                            class="btn btn-secondary"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="card text-center mb-3 m"
            style={{ width: "18rem", height: "12rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">Total a pagar</h5>
              <p className="card-text">${formattedTotal}</p>
              <a href="#" className="btn btn-success">
                Pagar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
