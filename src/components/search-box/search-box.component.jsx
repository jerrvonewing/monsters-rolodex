import { Component } from "react";
import "./search-box.styles.css";

/*
This component is responsible for displaying the
search box, and the onChange event
 */

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
export default SearchBox;
