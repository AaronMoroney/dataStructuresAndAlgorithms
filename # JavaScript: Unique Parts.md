# JavaScript: Unique Parts

Javascript is a dynamic and interpreted programming language - this is different to traditonal OOP langauges and 

## JavaScript Scope

- Scope is what defines the access to javascript variables
- In javascript, variables can belong to the local scope or the global scope
- Global variables are accessible from anywhere in the programme

### Global Scope

- in javascript, variables can be declared globally like so:

```javascript
test = 'sss'
console.log(test); //prints 'sss'
```
- this creats a global variable, and is one of the worst practices JavaScript

### Declaration with Var: functional scope 

- var, variables "float" all the way to the top, this is known as "variable hoisting" 
- variables declared at the bottom of the program, will **not** be the last thing executed in the script.

```javascript
function scope1() {
    var top = "top";
    bottom = "bottom";
    console.log(bottom);

    var bottom;
}

scope1(); //prints "bottom" -  no error
```
- this is the same as writing the function as:

```javascript
function scope1() {
    var top = "top";
    var bottom;
    bottom = "bottom";
    console.log(bottom);
}

scope1(); //prints "bottom" -  no error
```

- the thing to note about var keyword is the scope of the variable that is the closest FN. scope

```javascript
function scope2(print) {
    if(print) {
        var insideIf = '12';
    }
    console.log(insideIf);

    scope2(true); //prints 12 - no error
}
```

- in the above FN. scope2 function is the function scope closest to the print variable

**same code using let**

```javascript
function scope2(print) {
  if (print) {
    let insideIf = "12";
    console.log(insideIf);
  }
  //console.log(insideIf); - causes error
}

scope2(true);
```

```javascript
var a = 1;

function four() {
    if (true) {
        var a = 4;
    }
    console.loig(a); //prints 4
}
```

- 4 was printed because, a was available in that scope, and re-declared.


## Declaration with let: Block Scope

```javascript
function scope3(print) {
    if (print) {
        let insideIf = '12';
    }
    console.log(insideIf);
}

scope3(true) //error
```

- in this example, nothing is printed, or in my case: resolved with an error because the console.log is outside the block