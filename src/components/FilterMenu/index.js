import React from 'react'; 

import Search from '../Search/index.js'; 
import Select from '../Select/index.js'; 
import Sorter from '../Sort/index.js'; 

function FilterMenu() {
    return(
        <div className="filter-menu-container">
            <Search />
            <Select />
            <Sorter />
        </div>
    ); 
}

export default FilterMenu; 