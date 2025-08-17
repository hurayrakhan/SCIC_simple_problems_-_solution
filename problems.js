
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

// problem-3
