import React, { useState } from "react";

function PlantCard({ image, name, price }) {
  const [sold, setSold] = useState(true);
  function handleSold() {
    setSold(!sold);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {sold ? (
        <button onClick={handleSold} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleSold}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;