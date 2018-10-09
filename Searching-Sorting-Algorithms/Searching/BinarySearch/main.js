function bSearch(arr, val) {
    if (arr.length <= 0) return -1;
    if (arr.length <= 3) {
        if(arr[0] === val) return 0;
        else if(arr[1] === val) return 1;
        else if(arr[2] === val) return 2;
        else return -1;
    }
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor( (start + end) / 2);
    let temp = 0;
    while(arr[mid] !== val && start <= end) {
        if(val < arr[mid]) end = mid - 1;
        else start = mid + 1;
        mid = Math.floor((start + end) / 2);
    }
    return arr[mid] === val ? mid : -1;
}

console.log(bSearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 99));