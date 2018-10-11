// hash that works for strings only:

/*
    function hash(key, arrayLen) {
        let total = 0;
        for (let char of key) {
            // map "a" to 1, "b" to 2, "c" to 3, etc.
            let value = char.charCodeAt(0) - 96;
            total = (total + value) % arrayLen;
        }
        return total
    }
*/

/*
hash("pink", 10); // 0
hash("orangered", 10); // 7
hash('cyan', 10); // 3
*/

// Refining out Hash
// problems with our current hash

// 1. Only hashes strings (won't worry about this for now)
// 2. Not constant time - linear in key length
// 3. Could be a little more random (data might get clustered)

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Not a good implementation of a hash function, but it is enough to create a basic hash table

// array length should also be a prime number to lower rate of collisions
function hash(key, arrayLen) {
    let total = 0;
    // use a prime number to lower rate of collisions
    let prime = 31;
    // Math method cuts character length to max of 100 to keep time *sort of* constant
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total += (total * prime + value) % arrayLen;
    }
    return total
}


