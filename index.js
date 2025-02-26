import { v4 } from 'uuid';
import isEmail from 'validator/lib/isEmail.js';

function generateUniqueID(firstName, lastName) {
    var id = "";

    id = id + firstName.charAt(0).toLowerCase(); 
    id = id + lastName.toLowerCase();

    // create the alphanumeric string
    var alpha = v4();

    for (let i=0; i < 8; i++) {
        id = id + alpha.charAt(i);
    }

    return id;
}


function addAccount(firstName, lastName, email, age) {

    // check if all fields are present
    if (firstName === undefined || lastName === undefined || email === null || age === null) {
        return false;
    }

    // validate email format
    if (!isEmail(email)) {
        return false;
    }



    return true;
}

console.log(addAccount("Frederick", "Sindayen", "fdsindayen@up.edu.ph"))