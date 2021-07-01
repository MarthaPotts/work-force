import React from 'react'; 
import '../Table/style.css'
import API from '../../utils/API.js'; 

const users = data.res.data; 

function Table({users}) {
    function formatDate(date) {
        const dateArray = date.split("-"); 
        const year = dateArray[0]; 
        const month = dateArray[1]; 
        const dayArray = dateArray[2].split("T"); 
        const day = dayArray[0]; 
        const formattedDate = [month, day, year].join("-"); 
        return formattedDate; 
    }
    return(
        <main className="table-wrapper" id="table-wrapper">
            <table className="table" id="table">
                <colgroup>
                <col span="6"></col>
                </colgroup>
                
                <thead>
                    <tr>
                        <th data-image="Image">IMAGE</th>
                        
                        <th data-name="Name">NAME</th>
                        <th data-email="Email">EMAIL</th>

                        <th data-phone="Phone">PHONE</th>
                        <th data-dob="DOB">DOB</th>
                        <th data-age="Age">AGE</th>
                    </tr>
                </thead>
{users[0] !== undefined && users[0].name !== undefined ? (
                        users.map( ({name, picture, phone, email, dob, age}) => {
                            return(
                <tbody>
                    
                                <tbody>
                                    <tr>
                                        <td data-image="Image">
                                          <img
                                          src={picture.medium}
                                          alt={"profile image for " + name.first + " " + name.last}
                                          className="img"  /> 
                                        </td>
                                        <td data-name="Name">
                                            {name.title} {name.first} {name.last}
                                        </td>
                                        <td data-phone="Phone">
                                            {phone}
                                        </td>
                                        <td data-email="Email">
                                            {email}
                                        </td>
                                        <td data-dob="DOB">
                                            {formatDate(dob.date)}
                                        </td>
                                        <td data-age="Age">
                                            {age}
                                        </td>
                                    </tr>
                            ); 
                    })
                    ) : (
                        <></>
                    )}
                    
                </tbody>
            </table>
        </main>
    ); 
}
export default Table;