function sumZero(arr) {
    let right = arr.length - 1;
    let left = 0;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    return undefined;
}

console.log(sumZero([-4,-3,-2,-1,0,5,10]));