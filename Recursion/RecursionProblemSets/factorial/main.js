function factorial(num) {
    if(num === 0 || num === 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(4));

// power(4) => 24
    // 4 * power(3) => 4 * 6 || (4 * 3 * 2 * 1)
        // 3 * power(2) => 3 * 2 || (3 * 2 * 1)
            // 2 * power(1) => 2 * 1