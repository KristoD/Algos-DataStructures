// My solution

// function recursiveRange(num) {
//     if(num === 0) return 0;
//     let result = 0;

//     function addRange(input) {
//         if(input > num) return;
//         result += input;
//         addRange(input+1);
//     }
//     addRange(1);
//     return result;
// }

// Colts solution

function recursiveRange(n) {
    if(n === 0) return 0;
    return n + recursiveRange(n-1)
}

console.log(recursiveRange(2));
