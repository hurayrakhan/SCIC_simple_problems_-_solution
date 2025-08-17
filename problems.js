
// problem-1
function reverse(prop) {
    let reversed = ''
    for (let i = prop.length - 1; i >= 0; i--){
        reversed += prop[i]
    }
    return reversed
}

// problem-2
function countVowels(prop){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < prop.length; i++){
        if(vowels.includes(prop[i].toLowerCase())){
            count++;

        }
    }
    return count;
}





// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function isPalindrome(prop){
    let reversed = '';
    for (let i = prop.length -1; i >= 0; i--){
        reversed = reversed + prop[i];
    }
    return prop === reversed;
}





// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

function findMax(array){
    if(array.length === 0){
        return null;
    }
    let max = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max
}


