function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let val = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > val; j--) {
            console.log(i,j)
            console.log(arr)
            arr[j+1] = arr[j];
            console.log(arr)

        }
        arr[j+1] = val;
        console.log(arr)
    }
    return arr;
}

console.log(insertionSort([2,1,18,14,4]));