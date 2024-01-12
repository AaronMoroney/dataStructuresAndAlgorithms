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

## Equality and Types

- javascript has different types than a traditonal programming langauge like java

### variable types

-**There are seven primitive data types:**

1. boolean
2. number 
-- note: all numeric values are represented by the number type. This includes integers, floating-point numbers, and even special values like Infinity and NaN (Not-a-Number).
3. string
4. undefined
5. object
6. function
7. symbol

-a primitive type in programming refers to the most basic data types provided by a language.

- undefined is a primitive value, that is assigned to a variable that has just been declared

```javascript
let is20 = false;
typeof is20; //boolean

let age = 29;
typeof age; //number 

let lastName = 'moroney'
typeof lastName; //string

let bikes =['road', 'gravel', 'mtb'];
typeof bikes; //object

let me = {firstName: 'aaron', lastName: 'moroney'}
typeof me; //object

let nullVar = null;
typeof nullVar; //object

let nothing;
typeof nothing; //undefined
```

### truthy / falsy checks

- in many languages the parameter inside the if() must be a boolean
- because javascript is a dynamically typed langauge, so it is more flixble

```javascript
if(data) {
    ...
}
```

-'data', is a variable - if the variable is empty, null or undefined, it will evaluate to false. 

-**commonly 'false' expressions:**

1. false 
2. 0
3. Empty Strings ('', "")
4. NaN
5. undefined 
6. null

-**commonly 'true' expressions:**

1. true
2. any number other than 0
3. non-empty strings
4. non-empty objects

``` javascript
let printIfTrue = ";

if (printIfTrue) {
    console.log('truthy');
} else {
    console.log('falsey');
} //prints 'falsey'
```

## === vs ==

- JavaScript is a scripting language so variables are **NOT** assigned a type during declaration.
- Types are interpreted as the code runs 
- Hence === is used to check eqaulity more strictly than ==

```javascript
"5" == 5 //returns true, "5"(string) is coerced to a number before the comparison
"5" === 5 //returns false, because "5" type string, !== 5 of type number 
```

## Objects

- most strongly typed languages such as Java use isEquals() to check weather two objects are the same

- you may be temped to check if two objects are equal to eachother in JS, however; this will not evaluate to true, **because they have different addresses in memory**

```javascript
let obj A = {}
let obj B = {}

A == B //returns false
A === B //returns false
```

- most javascript apps will use https://lodash.com, or http://underscorejs.org to run a function, isEqual(a,b)

- further anomolies:

```javascript
var obj1 = {'prop1': "test", 'prop2': function(){} };
var obj2 = {'prop1': "test", 'prop2': function(){} };

isEquivalent(obj1, obj2 ); //returns false
```

- this is because funcutions and arrays cannot simply use the == operator to check equality


```javascript
let function1 = function(){console.log(2)};
let function2 = function(){console.log(2)};

console.log(function1 = function2) //returns false
```

- different addresses in memory, == & === can only be used for strings and numbers
- for objects, each property in the object needs to be checked.
