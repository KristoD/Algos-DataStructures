function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for(let x = 0; x < maxDigitCount; x++) {
        let buckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], x);
            buckets[digit].push(nums[i]); 
        }
        nums = [].concat(...buckets);
    }
    return nums;
}

console.log(radixSort([23,345,5467,12,2345,9852]));