
import React from 'react'; 
import '../styles/DataBody.css'; 

function DataBody( {users} ) {
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
    <tbody>
        
        {users[0] !== undefined && users[0].name !== undefined ?
        (users.map( (({name, picture, phone, email, dob, age}) => {
            return(
                <tr key={age}>
                    <td data-th="Image" className="middle">
                        <img 
                        src={picture.medium}
                        alt={"profile for " + name.first + " " + name.last}
                        className="img"
                        />
                    </td>

                    <td data-th="Name" className="name-td middle">
                        {name.first} {name.last}
                    </td>

                    <td data-th="Phone" className="middle">
                        {phone}
                    </td>

                    <td data-th="Email" className="middle">
                        <a href={"mailto:" + email} target="__blank">
                            {email}
                        </a>
                    </td>

                    <td data-th="DOB" className="middle">
                        {formatDate(dob.date)}
                    </td>
                </tr>
            ); 
        })
        
        )) : ( <></>
            )}
    </tbody>
); 
}

export default DataBody; 