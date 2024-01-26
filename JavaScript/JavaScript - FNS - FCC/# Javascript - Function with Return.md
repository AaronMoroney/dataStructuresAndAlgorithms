# Javascript - Function with Return

## Function with Return

``` javascript
function add(a, b) {
    return a + b;
}
add(10, 20); //30

function add(a, b) {
    let theSum = a + b;
    return theSum;
}

function multiply(a, b) {
    return a * b;
}

let theSum = add(10, 20); // This will be 30

let result = multiply(theSum, 5);
console.log(result); // This will output 150

```
