import React from "react";
import "../styles/SearchBar.css"


function SearchBar(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Enter name for search"
            id="search"
          />
          {/* <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
          </button> */}
        </div>
      </form>
    );
  }
  
  export default SearchBar;


    /*</tbody>name:{person.name.first} </p>*/