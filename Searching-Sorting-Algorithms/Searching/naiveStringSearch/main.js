function searchString(str, phrase) {
    if(str.length === 0 || phrase.length === 0) return -1;
    let counter = 0;
    let match = false;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === phrase[0]) {
            for(let j = 0, x = i; j < phrase.length; j++, x++) {
                if(str[x] !== phrase[j]) {
                    match = false;
                    break;
                }
                match = true;
            }
            if(match === true) counter++;
        }
    }
    return counter;
}

console.log(searchString("lorie loled", "lol"));