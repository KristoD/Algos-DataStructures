// My stupid solution

// function reverse(str) {
//     if(str.length <= 1) return 1;
//     let newStr = "";
//     let index = str.length - 1;
//     function createString() {
//         if(index < 0) return;
//         newStr += str[index];
//         index--;
//         createString();
//     }
//     createString();
//     return newStr;
// }

// Right solution

function reverse(str) {
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse("rithmschool"));