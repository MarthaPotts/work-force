 
const axios = require('axios'); 

const getUsers = function () {axios.get("https://randomuser.me/api/?results=2&inc=name,email,dob,phone,picture").then( (res) => {
    console.log(res.data); 
}).catch( (err) => {
    console.log(err); 
}); 
}; 
export default getUsers; 