import { Component } from "react";
import "./card.styles.css";
const Card = ({ monsters }) => (
  <div className="card-container" key={monsters.id}>
    <img
      alt={`monster ${monsters.name}`}
      src={`http://localhost:3000/${monsters.id}.webp`}
    />
    <h2>{monsters.name}</h2>
    <p>{monsters.powers}</p>
  </div>
);

export default Card;
