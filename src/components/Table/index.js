import React from 'react'; 
import '../Table/style.css'; 
import API from '../../utils/API.js'; 

class Table extends React.Component {
     
    state = {
        users: [{}], 
        filteredUsers: [{}]
    }

    //searchbox option, sortBy option; 
    //searchbox => filteredUsers, sortBy => sortedValue
    // sortBy = 
    // th order: 0=img = picture.medium = !change
    //           1=? sortedValue (name || email)
    //           2=? sorted Value (email || or name)
    //           3 = phone, 4 = formatDate(dob), 5 = age = !change
        // if  sortedValue == name  => index 1 = name, index 2 = email
        // if  sortedValue == email => index 1 =email,  index 2 = name
        // heading == sortedValue

    handleSearchChange = (e) => {
        console.log(e.target.value); 
        const filter = e.target.value; 
        const filteredList = this.state.users.filter(item => {
            let values = Object.values(item).join("").toLowerCase(); 
            return values.indexOf(filter.toLowerCase()) !== -1; 
        }); 

        this.componentDidMount() {
            API.getUsers().then(results => {
                this.setState({
                    users: results.data.results, 
                    filteredUsers: results.data.results
                }); 
            }); 
    }}
    
    render() {
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

                <tbody>
                    <tr>
                        <td data-image="Image">
                            <img 
                            src={picture.medium}
                            alt={"profile pic for " + name.first + " " + name.last}
                            className="img" />
                        </td>

                        <td data-name="Name">
                            {name.title} {name.first} {name.last}
                        </td>
                        
                        <td data-email="Email">
                            {email}
                        </td>

                        <td data-phone="Phone">
                            {phone}
                        </td>

                        <td data-dob="DOB">
                            {formatDate(dob.date)}
                        </td>

                        <td data-age="Age">
                            {age}
                        </td>
                    </tr>
                </tbody>
                </table>
                </main>
                     
        )}; 
    }