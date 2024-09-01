import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardPizza.css";
// import { pizzasMenu } from "../data/pizzas.js";

function CardPizza({ pizza }) {
  const { id, img, ingredients, name, price } = pizza;
  return (
    <>
      <div>
        <div key={id} className="card" style={{ width: "250px;" }}>
          <img src={img} className="card-img-top images" alt="..." />
          <div className="card-body">
            <h3 className="card-title mb-0">Pizza: {name}</h3>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p>🍕 Ingredientes:</p>
              {ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </li>
            <h5 className="list-group-item mb-0">Precio: {price}</h5>
          </ul>
          <div className="card-body cards-buttons d-flex justify-content-evenly">
            <a href="#" className="btn btn-dark">
              Ver Más 👀
            </a>
            <a href="#" className="btn btn-dark">
              Añadir 🛒
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPizza;
