# Function Declaration

## Declaration of a function

- Function declaration & Definition, are the same thing

```javascript
function printMe() {
    //logic goes here
}

function printMe() {
    console.log("Hello World");
}

printMe //this will print the function itself
printMe(); //calling the function, executes the function

function printMe(name) { //paramters, can put as many as you want
    console.log(name);
}

printMe("John"); //passing arguments
```
## paramter vs argument

- anything you pass in the funciton declaration is a parameter
- anything you pass in the function call is an argument

## Function Expression

```javascript
const count = 100; //variable

const printMe = function() { //assigning a function to a variable
    console.log("print");
} //function expression

const printMe = function(a, b) { //assigning a function to a variable w/ params
    console.log(a,b);
} //function expression

printMe(10,20); //calling the function
```