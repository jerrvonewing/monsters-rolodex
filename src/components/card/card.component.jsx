import "./card.styles.css";

const Card = ({ monster }) => (
  <div className="card-container" key={monster.id}>
    <img
      alt={`monster ${monster.name}`}
      src={`http://localhost:3000/img/${monster.id}.png`}
    />
    <h2>{monster.name}</h2>
    <p>{monster.bio}</p>
  </div>
);
export default Card;
