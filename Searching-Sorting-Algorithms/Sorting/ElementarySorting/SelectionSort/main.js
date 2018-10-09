// My solution

// function selectionSort(arr) {
//     let noSwaps;
//     let min = arr[0];
//     let idx = 0;
//     for(let i = 0; i < arr.length; i++) {
//         min = arr[i];
//         noSwaps = true;
//         console.log(arr)
//         for(let j = i; j < arr.length; j++) {
//             if(arr[j] < min) {
//                 min = arr[j];
//                 idx = j;
//                 noSwaps = false;
//             }
//         }
//         if(noSwaps == false) {
//             var temp = arr[i];
//             arr[i] = min;
//             arr[idx] = temp;
//         }
//     }
//     return arr;
// }

// Colt's solution

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        var lowest = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// Colt's ES2015 Solution

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }
    return arr;
}

console.log(selectionSort([72,4,15,22,8,2,10]));