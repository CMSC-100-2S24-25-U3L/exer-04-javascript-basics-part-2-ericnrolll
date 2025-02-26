import { v4 } from 'uuid';
import isEmail from 'validator/lib/isEmail.js';
import { appendFileSync } from 'fs';

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


function addAccount(input) {
    var firstName = input[0];
    var lastName = input[1];
    var email = input[2];
    var age = input[3];


    // check if all fields are present
    if (firstName === undefined || lastName === undefined || email === undefined || age === undefined) {
        return false;
    }

    // check if first name, last name, and email are non-empty strings
    if (typeof(firstName) != "string" || typeof(lastName) != "string" || typeof(email) != "string" || firstName === "" || lastName === "" || email === "") {
        return false;
    }

    // validate email format
    if (!isEmail(email)) {
        return false;
    }   

    // check if age is at least 18
    if (age < 18) {
        return false;
    }

    appendFileSync('users.txt', firstName + "," + lastName + "," + email + "," + age + "," + generateUniqueID(firstName, lastName) + "\n")

    return true;
}



export default { generateUniqueID, addAccount }