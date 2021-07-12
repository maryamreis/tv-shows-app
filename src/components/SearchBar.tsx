import mapArray from "../episodes.json";
import {useState} from "react";
import filterEpisodes from "../utils/filterEpisodes"

interface searchProps {
   // setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    setSearchTerm(term: string): void
    searchTerm: string
}

function SearchBar(props: searchProps): JSX.Element {
    const episodeCount = filterEpisodes(mapArray, props.searchTerm)

    return(
        <div className="searchBar">
            <div>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Search..."
                    onChange={(event) => {
                        props.setSearchTerm(event.target.value)}}
                />
            </div>
                
            {/* <select className="dataResult">
                {mapArray.filter((ep) => {
                    if (searchTerm === "") {
                        return ep
                    } else if (ep.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return ep
                    }
                    }).map((ep) => {
                    return (
                        <option key={ep.id} >
                        <p>{ep.name}</p>
                        </option>
                    )
                    })}
            </select>  */}
            <div>
                <p className="displayBar">Displaying {episodeCount.length}/{mapArray.length}</p>
            </div>
        </div>
        )

}

export default SearchBar;