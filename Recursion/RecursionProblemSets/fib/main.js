// My solution

// function fib(num) {
//     if(num === 0) return 0;
//     if(num === 1 || num === 2) return 1;
//     let fibSeq = [1,1];
//     let index = 1;
//     function findFib() {
//         if((index + 1) === num) return;
//         fibSeq.push(fibSeq[index] + fibSeq[index - 1]);
//         index++;
//         findFib();
//     }
//     findFib([1,1]);
//     return fibSeq[index];
// }

// Colts solution

function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(35));
