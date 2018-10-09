function merge(arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] > arr2[j]) {
            newArr.push(arr2[j]);
            j++;
        } else {
            newArr.push(arr1[i]);
            i++;
        }
    }
    while(i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([8,2,14,99,22,44]));