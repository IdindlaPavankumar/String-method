// // convert to Uppercase
let str = prompt('enter the string1')
let a = str.toUpperCase()
console.log(a);
// convert to Lowercase
let str2 = prompt('enter the string2')
let b = str2.toLowerCase()
console.log(b);
// reverse string
let str3 = prompt('enter the string3')
let c = str3.split('').reverse('').join('')
console.log(c);
// count the number of vowels in a string
let str4 = prompt('enter the the string3')
let matches = str4.match(/[aeiou]/gi);
let vowelCount = matches ? matches.length : 0
console.log(`Number of vowel in string is:${vowelCount}`)
// USERNAME VALIDATION
function validateUsername(username) {
    const length = username.length;

    if (length >= 5 && length <= 15) {
        return "Username is valid.";
    } else {
        return "Username must be between 5 and 15 characters.";
    }
}
// Take input from the user
const userInput = prompt("Enter your username:");
const result = validateUsername(userInput.trim());
alert(result);
// Email Formatter
let firstName = prompt('enter the firstname');
let lastName = prompt('enter the last name');
let name1 = firstName.toLowerCase();
let name2 = lastName.toLowerCase();
let final = name1.concat(".", name2, "@gmail.com");
alert(final);
// Word counter
let sentence = prompt('enter the sentence')
let word = sentence.trim().split('')
alert(word.length)
// Palindrome checker
// Get user input
const userInput1 = prompt("Enter a string to check if it's a palindrome:");

// Convert the input to lowercase and remove non-alphanumeric characters
const cleanedStr = userInput1.toLowerCase().replace(/[^a-z0-9]/g, '');

// Split the cleaned string into an array, reverse it, and join it back into a string
const reversedStr = cleanedStr.split('').reverse().join('');

// Check if the cleaned string is equal to its reversed version
if (cleanedStr === reversedStr) {
    alert(`${userInput1} is a palindrome.`);
} else {
    alert(`${userInput1} is not a palindrome.`);
}


