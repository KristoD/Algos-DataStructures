function validAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    let fCounter1 = {};
    let fCounter2 = {};
    for(let char of str1) {
        fCounter1[char] = ++fCounter1[char] || 1;
    }
    for(let char of str2) {
        fCounter2[char] = ++fCounter2[char] || 1;
    }
    for(let key in fCounter1) {
        if(!(key in fCounter2)) {
            return false;
        }
        if(fCounter1[key] !== fCounter2[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram("anagram", "nagaram"));