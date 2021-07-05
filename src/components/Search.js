import React from 'react'; 
import '../styles/SearchBox.css'; 

function Search( {handleSearchChange}) {
    return(
        <div className="searchForm-container">
            <form className="search">
                <label>
                    Search Directory: 
                </label>
                <input 
                type="search"
                placholder="Search..."
                onChange={ (e) => handleSearchChange(e)} 
                />
            </form>
        </div>
    ); 
}

export default Search; 