import React from 'react'; 


// function Search() {
//     return(); 
// }
class Search extends React.Component{
    state= {inputValue: ''}; 

    render() {
        return(
            <div className="searchForm-container">
                <form className="search" >
                    <label>
                        Search Directory
                    </label>
                    <input 
                    type="search"
                    placeholder="Search..."
                    value={this.state.inputValue}
                    onChange={ (e) => this.setState(
                        {inputValue: e.target.value}
                    )} />
                </form>
            </div>
        ); 
    }; 
}
export default Search; 