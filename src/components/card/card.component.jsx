import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { id, name, powers } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img alt={`monster ${name}`} src={`http://localhost:3000/${id}.webp`} />
        <h2>{name}</h2>
        <p>{powers}</p>
      </div>
    );
  }
}

export default Card;
