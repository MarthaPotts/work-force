import React from 'react'; 

class Sorter extends React.Component {

    state={sortedValue: "Name"}; 
    //const handleSort = () =>

    render() {
        
        return(
            <div className="dropdown">
                <p>Sort by:</p>
                <form>
                    <select name="category" defaultValue="Name">
                        <option value="Name" 
                        onChange={ (e) => this.setState(
                            {sortedValue: e.target.value}
                        )}>Name</option>

                        <option value="Email"
                        onChange={ (e) => this.setState(
                            {sortedValue: e.target.value}
                        )}>Email</option>

                    </select>
                </form>
            </div>
        );
    }; 
};

export default Sorter; 