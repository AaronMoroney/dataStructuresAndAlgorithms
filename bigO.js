//write a function that calculates the sum of all number to numberfunc

//loop approach - 0(n)
function addUpTo(n) {
    let total=0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;   
}
console.log(addUpTo(6));

//math approach - 0(1)
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

//addUpTo2 is faster - math operations

/*
    function addUpTo2(n) {
        return n * (n + 1) / 2;
    }

    - this code has to do 1 x multiplication, 1 addition and 1 division
    - 3 simple calculation, regardless of the size of (n)

    --------------

    function addUpTo(n) {
        let total=0;
        for (let i = 0; i <= n; i++) {
            total += i;
        }
        return total;   
    }

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
                -------
                |    /|
    time       |  /  | 
                |/    |
                -------
                input
                
    f(n) could be quadratic(f(n) = n^2)
    --as input increases, the runtime of the algo increase by the square of 
    the input size

                -------
                |   | |
    time       |  /  | 
                |/    |
                -------
                input

    f(n) could be constant (f(n)=1)
    --runtime remains constant to input size

                -------
                |     |
    time       |_____| 
                |     |
                -------
                input
                
*/

function upAndDown(n) {
  console.log('going up!');
  for (let i = 0; i <= n; i++) {
    console.log(i)
  }
  console.log(`at the top, i'm going down!`);
  for (let j = n - 1; j >= 0; j--) {
  console.log(j);
  }
}

console.log(upAndDown(10));



/*
    //big-O shorthands 

    1. arithmithic operations are constant 
    2. variable assignment is constant
    3. accessing elements in an array (by index) or object (by key) is constant
    4. in a loop 
    -- the complexity of the lenght(n) of the loop 
    -- x --
    -- the comlexity of what happens inside the loop
*/



/*
    //space complexities in JS

    -- most primitives (booleans, numbers, undefined, null) are constant space
    -- strings require O(n) space, (where n is the string length)
    -- reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
*/

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

//space complexity only in the addition, variable assignemnts, doesn't scale w/ input

let arr = [1,2,3,4,5];

function doubleArr(array) {
  let newArr = [];
  for (let i = 0; i< array.length; i++) {
    newArr.push(2 * array[i]);
  }
  return newArr;
}

console.log(doubleArr(arr));
