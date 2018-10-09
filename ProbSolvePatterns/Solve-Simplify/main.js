// write a function that takes a string and counts for each character in the string

// charCount('aaa'); {a: 3}
// charCount('hello'); {h: 1, e: 1, l: 2, o: 1}
// charCount('Your PIN is 12345'); you get the point

// function charCount(str) {
//     // make object to return at end
//     var result = {};
//     str = str.toLowerCase();
//     var alphanum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
//     "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
//     // loop over string, for each character
//     for(var i = 0; i < str.length; i++) {
//         if(alphanum.includes(str[i])) {
//             // if the char is a number/letter AND is a key in object, add one to count
//             if(result[str[i]] > 0) {
//                 result[str[i]]++;
//             // if the char is a number/letter AND is not in object, add it to object and set value to 1
//             } else {
//                 result[str[i]] = 1;
//             }
//         }
//         // if char is something ele (space, period, etc) don't do anything
//     }
//     // return object
//     return result;
// }

// Refactored version

function charCount(str) {
    var obj = {};
    for(let char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

console.log(charCount("aaaa"));
console.log(charCount("hello!"));
console.log(charCount("Your PIN is 12345"));