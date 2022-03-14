import "./card-list.styles.css";
import Card from "../card/card.component";
/*
This component is responsible for displaying 
the list of monsters from the filtered monsters array
*/

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
