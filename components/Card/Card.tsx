import React from "react";
import "./Card.css";

interface Props {
  name: string;
  image: string;
  price: number;
}

export default function Card({ name, image, price }: Props) {
  return (
    <div className="cardContainer">
      <div>
        <img
          src={image}
          alt={`Product Image ${name}`}
          width={370}
          className="imageCard"
        />
      </div>
      <div className="cardInfo">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
}
