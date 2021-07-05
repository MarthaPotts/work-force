import React from 'react'; 
import DataBody from './DataBody.js'; 
import '../styles/DataTable.css'; 

function DataTable( {headings, users, handleSort }) {
    return(
        <div className="data-table-container">
            <table id="table" className="table">
                <colgroup>
                <col span="6"></col></colgroup>
                <thead>
                    <tr>
                        {headings.map( ({name, width}) => {
                            return(
                                <th className="col"
                                key={name}
                                style={{width}}
                                onClick={ () => {
                                    handleSort(name.toLowerCase()); 
                                }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            ); 
                        })}
                    </tr>
                </thead>
                <DataBody users={users}/>
            </table>
        </div>
    ); 
}
export default DataTable; 