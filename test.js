import account from './index.js'



console.log(account.addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25]))
console.log(account.addAccount(["Ted", "Nelson", "ted@w3c.com", 43]))
console.log(account.addAccount(["Frederick", "Sindayen", "fdsindayen@up.edu.ph", 21]))
console.log(account.addAccount(["Ted", "Nelson", "ted@w3c.com", 16])) // returns false (age < 18)
console.log(account.addAccount(["", "Nelson", "ted@w3c.com", 43])) // returns false (empty string)
console.log(account.addAccount(["Ted", 5, "ted@w3c.com", 43])) // returns false (non-string)
console.log(account.addAccount(["Ted", true, "ted@w3c.com", 43])) // returns false (non-string)
console.log(account.addAccount(["Ted", "Nelson", "ted", 43])) // returns false (invalid email)