import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) //pass each response from json to users variable
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  //iterate through the array using map function, then render and return the name of each
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
