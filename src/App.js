import { Component } from "react";
import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    console.log("constructor");
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) //pass each response from json to users variable
      .then(
        (
          users //pass each response to setState of monsters aeeay
        ) =>
          this.setState(
            () => {
              return { monsters: users }; //return each object to array
            },
            () => {
              console.log(this.state); //verify in console
            }
          )
      );
  }

  //onSearchChange
  //pass an event to function onSearchChange
  //set state of search field and return current value
  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
