function power(num, expo) {
    if(num === 1 || expo === 0) return 1;
    return num * power(num, expo-1);
}

console.log(power(2,4));

// power(2,4) => 16
    // 2 * power(2,3) => 2 * 8
        // 2 * power(2,2) => 2 * 4
            // 2 * power(2,1) => 2 * 2
                // 2 * power(2,0) => 2 * 1
                    // power(2,0) hits base case => 1