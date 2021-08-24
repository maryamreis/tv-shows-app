import mapArray from "../episodes.json";
import { useState } from "react";
import filterEpisodes from "../utils/filterEpisodes";
import { searchProps } from "../Types";

function SearchBar(props: searchProps): JSX.Element {
  const episodeCount = filterEpisodes(mapArray, props.searchTerm);

  return (
    <div className="searchBar">
      <div>
        <input
          className="input"
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            props.setSearchTerm(event.target.value);
          }}
        />
        <select
          onChange={(event) => {
            props.setSearchTerm(event.target.value);
            console.log(event.target.value);
          }}
        >
          {mapArray.map((ep) => (
            <option key={ep.id} value={ep.name}>
              S{ep.season.toString().padStart(2, "0")}E
              {ep.number.toString().padStart(2, "0")} - {ep.name}
            </option>
          ))}
          <option value="">Refresh</option>
        </select>
      </div>
      <div>
        <p className="displayBar">
          Displaying {episodeCount.length}/{mapArray.length}
        </p>
      </div>
    </div>
  );
}

export default SearchBar;
