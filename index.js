import { v4 } from 'uuid';


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

console.log(generateUniqueID("Frederick", "Sindayen"));