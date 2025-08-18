
// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.
// Example:
// Input: "hello"
// Output: "olleh"

function reverse(prop) {
    let reversed = ''
    for (let i = prop.length - 1; i >= 0; i--){
        reversed += prop[i]
    }
    return reversed
}

// console.log(reverse('hello'));
// console.log(reverse('madam'));


// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
// Example:
// Input: "programming"
// Output: 3

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


// console.log(countVowels('programming'));
// console.log(countVowels('hurayra'));


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

// console.log(isPalindrome('hurayra'));
// console.log(isPalindrome('madam'));



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

// console.log(findMax([2, 4, 6, 7, 9]));
// console.log(findMax([10, 12, 77, 8, 9]));



// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.
// Example:
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function removeDuplicates(array){
    const uniqueArray = [];
    for(let i = 0; i < array.length; i++){
        if(!uniqueArray.includes(array[i])){
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4 ]));
// console.log(removeDuplicates([44, 44, 55, 55, 25, 23, 25, 23 ]));


// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4]
// Output: 10

function sumOfArray(array){
    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

// console.log(sumOfArray([2, 4, 6, 8, 10]));
// console.log(sumOfArray([10, 20, 30, 40, 50]));


