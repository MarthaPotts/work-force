import React from 'react'; 

class Select extends React.Component {

    state = {selectedValue: "Table"}; 
    // const handleSelect = () =>

    render() {
        return(
        <div className="select-menu">
            <p>Select view:</p>
            <form className="select-form">
                <select name="selection" defaultValue="Table">
                    <option value="Table" onChange={ (e) => this.setState(
                        {selectedValue: e.target.value}
                    )}>Table</option>
                    <option value="Profile" onChange={ (e) => this.setState(
                        {selectedValue: e.target.value}
                    )}>Profile</option>
                </select>
            </form>
        </div>
        )}; 

}; 


export default Select; 
