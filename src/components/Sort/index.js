import React from 'react'; 

class Sorter extends React.Component {

    state={sortedValue: "Name"}; 
    //const handleSort = () =>

    render() {
        return(
            <div className="dropdown">
                <p>Sort by:</p>
                <form>
                    <select name="category">
                        <option value="Name" selected
                        onChange={ (e) => this.setState(
                            {sortedValue: e.target.value}
                        )}>Name</option>

                        <option value="Email"
                        onChange={ (e) => this.setState(
                            {sortedValue: e.target.value}
                        )}>Email</option>

                        <option value="Image"
                        onChange={ (e) => this.setState(
                            {sortedValue: e.target.value}
                        )}>Image</option>

                        <option value="DOB"
                        onChange={ (e) => this.setState(
                            {sortedValue: e.target.value}
                        )}>DOB</option>
                    </select>
                </form>
            </div>
        );
    }; 
};

export default Sorter; 