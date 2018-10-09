// My stupid solution

// function productOfArray(arr) {
//     if(arr.length === 0) return 0;
//     let result = 1;

//     function mult(input) {
//         if(input.length === 0) return;

//         result *= input[0];

//         mult(input.slice(1));
//     }
//     mult(arr);

//     return result;
// }

// Real Solution

function productOfArray(arr) {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([6,21,3,9]));