const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callback) {
    if(arr.length === 0) return false;
    if(callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([8,2,6,4], isOdd));