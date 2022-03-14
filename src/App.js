//import { Component } from "react";
import { useState, useEffect } from "react";

import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [stringField, setStringField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/users")
    fetch("http://localhost:3000/mk-characters.json")
      .then((response) => response.json()) //pass each response from json to users variable
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilteredMonsters);

    console.log("filterRequest");
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    console.log(event.target.value);
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="App-title">Choose Your Fighter!</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Fighters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

/*
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
        <h1 className="App-title">Ahhhh!!! Monsters!</h1>
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
*/
export default App;
