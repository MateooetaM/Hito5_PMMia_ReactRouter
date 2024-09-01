import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import "./Home.css";
import { useState, useEffect } from "react";

const urlBase = "http://localhost:5000/api/pizzas";

function Home() {
  const [data, setData] = useState([]);

  // Funcion asincronica para llamar a la API pizzas
  const getData = async () => {
    const response = await fetch(urlBase);
    const datos = await response.json();
    setData(datos);
    // console.log(datos);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1 className="text-center mt-3">Elige a la carta!</h1>
        <p className="text-center">
          Las mejores sabores del mediterraneo en un solo lugar
        </p>
        <div className="container my-5">
          <div className="d-flex flex-wrap gap-3 p-0 p-sm-2 justify-content-center">
            {data.map((pizza) => (
              <CardPizza key={pizza.id} pizza={pizza} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
