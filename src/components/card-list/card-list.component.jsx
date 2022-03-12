import { Component } from "react";

/*
This component is responsible for displaying 
the list of monsters from the filtered monsters array
*/

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => (
          <h1>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
