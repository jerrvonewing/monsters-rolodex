import "./search-box.styles.css";

/*
This component is responsible for displaying the
search box, and the onChange event
 */

const SearchBox = ({ className, onChangeHandler, placeholder }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);
export default SearchBox;
