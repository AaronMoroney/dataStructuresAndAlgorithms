#Big O Notation

This document provides examples of JavaScript functions to calculate the sum of numbers and illustrates concepts of Big O Notation and space complexity.

Big-O allows you to analyze the effectiveness if an algorithm in respect to:

- time (execution time)
- space (memoery consumed) 

![big - O](https://miro.medium.com/v2/resize:fit:1400/1*FkQzWqqIMlAHZ_xNrEPKeA.png)

## Big-O Notation Primer

the Big-0 notation measures the worse-case complexity of an algorithim

- n represents the number of inputs
- what will happen as n approaches infinity?

### Common Examples - O(1) - constant

- O(1) does not change with respect to input space. 
- O(1) is constant time - (O)1 is Holy

-**example** printing numbers from 0 to n-1 in a loop

```javascript
function exampleLinear(n) {
    for (var i = 0; - < n; i++) {
        console.log(i);
    }
}
```

### Common Examples - O(n2) - quadratic

- nested loop
- poor time complexity as (n) approaches inifinity 

```javascript
function exampleQuadratic(n) {
    for (var = i; i < n; i++ )  {
        console.log(i)
        for (var = j; j < n; j++ )  {
            console.log(j);
        }
    }
}
```

### Common Examples - O(n3) - cubic

```javascript
function exampleQuadratic(n) {
    for (var = i; i < n; i++ )  {
        console.log(i)
        for (var = j; j < n; j++ )  {
            console.log(j);
            for (var k = j; j < k; j++ ) {
                console.log(k);
            }
        }
    }
}

```
### Common Examples - O(log n) - logarithmic

- example of logarithmnic time complexity is printing elements that are power of 2 between 2 & N.
- example logarithim(10) prints //2,4,8,16,32,64
- efficiency of logarithmic time complexities is apparent with large inputs

```javascript
function exmapleLogarithmic(n) {
    for (var i = 2;p - <= n; i = i*2 ) {
        console.log(i);
    }
}
```
## Rules of Big-O Notation

- Represent an alogrithm's complexity as f(n)
- n = number of inputs
- f(n)time = represents the time needed
- f(n)space = represents the space(additional memory) needed

**the goal is to calculate the algorithms efficiency by calculating f(n)**

### co-efficient rule

**if f(n) is O(g(n)), then kf(n) is O(g(n)) for ant constant k > 0**

- the first rule is the coefficient rule, which eliminates coefficients not related to the input size n
- this is because as n appraches inifinity, the other coefficient becomes negligible.

```javascript
function a(n) {
    var count = 0;
    for (var i=0; i < n; i++ ) {
        count +=1;
    }
    return count;
}
```

- the following block has f(n) = 5(n)
- because from 0 to 5n

```javascript
function a(n) {
    var count = 0;
    for (var i=0; i < 5*n; i++ ) {
        count +=1;
    }
    return count;
}
```

- both the above big-O notation of O(n)
- if n is close to infinity or another large number, those four additonal operations are meaningless.

-**another example**

```javascript
function a(n) {
    var count = 0;
    for(var i = 0; i<n; i++) {
        count +=1;
    }
    count +=3;
    return count;
}
```

- this block of code has f(n) = n+1
- there is +1 operation from the last(count +=3)
- this still has a Big-O notation of O(n) - the one operation is not dependant on the input, (n)
- as (n) approaches infinity, it will become neglible.

### sum rule - add big-O's up

- the sum rule is easy to understand, time complexities can be added. 
- the big-O of a master algo, that requires two other algos, is simlpy the two others added.

```javascript
function a(n){
    var count = 0;
    for (var i = 0; i<n; i++) {
        count +=1;
    }
    for (var i = 0; j < 5*n; i++) {
        count +=1;
    }
    return count
}
```
- in this example: line 4 has f(n) = n
- in this example: line 7 has f(n) = 5n
- this results in f(n) = 6n
- when applying the coefficient rule, the final result is O(n) = n