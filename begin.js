//write a function that calculates the sum of all number to numberfunc
function addUpTo(n) {
    let total=0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;   
}
console.log(addUpTo(6));

//math approach
function addUpTo2(n) {
    return n * (n + 1) / 2;
}
console.log(addUpTo2(6));

//evaluate and compare
let t1 = performance.now();
addUpTo(10000000)
let t2 = performance.now();
console.log(`time elapsed: ${(t2 -t1) / 1000} seconds.`);

//evaluate and compare algo2
let t3 = performance.now();
addUpTo2(10000000)
let t4 = performance.now();
console.log(`time elapsed 2: ${(t4 -t3) / 1000} seconds.`);

/*
    function addUpTo2(n) {
        return n * (n + 1) / 2;
    }

    - this code has to do 1 x multiplication, 1 addition and 1 division
    - 3 simple calculation, regardless of the size of (n)

    function addUpTo(n) {
        let total=0;
        for (let i = 0; i <= n; i++) {
            total += i;
        }
        return total;   
    }

    --------------

    - this code has to run in a loop, based of the number of n
    - also, additions(assignments)
    - i ++ 
    - variable assigment
    - i = 1
    - comparisons, i <=n; runs many times based on (n)

    depending on the count, it can be 5(n) + 2
    if n = 10, 5(10) + 2 = 52 operations
*/

/*

f(n) could be linear (f(n) = n)
-- as the input increases, runtime scales
f(n) could be quadratic(f(n) = n^2)
--as input increases, the runtime of the algo increase by the square of 
the input size
f(n) could be constant (f(n)=1)
--runtime remains constant to input size

*/
