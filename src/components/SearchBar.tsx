import mapArray from "../episodes.json";
import {useState} from "react";

interface searchProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

function SearchBar(props: searchProps): JSX.Element {

    return(
        <div>
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
        </div>
        )

}

export default SearchBar;