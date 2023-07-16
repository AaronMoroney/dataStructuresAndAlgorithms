//https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/9816140#overview

/*

    e.g write a function that takes in two numbers and returns their sum

    function sum(x,y) {
        return x += y;
    }
    console.log(sum(1,2));

    ======================
    20. Understand the problem
    ======================

    -- 1. can I restate the problem in my own words?
    ** 'implement addition'

    -- 2. what are the inputs that go into the problem?
    **  are the numbers floating points?
    **  is there a mathmatical upper bound in this programming langauge

    -- 3. What are the outputs that should come from the solution?
    ** int
    ** floating point
    ** strings
   
    -- 4. Can the outputs be determined from the inputs? Do i have enough info?
    ** what happens if someone only passes in only one number?
    
    -- 5. how should i label the important pieces of info?
    ** function name, inputs (x,y), store result in variable?
*/

/*
    ======================
    21. concrete examples
    ======================

    //Write a function which takes in a string & returns counts of each char in string

    eg FN: charCount('aaaa') // {a:4}
    eg FN: charCount('hello') // {h:1, e:1, l:2, o:1 }

    --1. Start w/ simple examples
    --2. Progress to more complex examples
    --3. Explore examples w/ empty inputs
    --4. Explore examples w/ imnvalid inputs 

    does our code need to contain a count of charecotrs not present?
    what about other charectors, whitespaces, casing?
    what about empty inputs?
*/

/*
    ======================
    22. Break it down
    ======================
    get the steps down - write them down w/ comments

    function charCount(string) {
        //do something
        //return an obj w/ keys that are lowercase, alphanumeric, numbers
    }
    function charCount(string) {
        //make obj to rerturn @ end
        //loop over string 
        -- for each char
        -- if char is a number/letter & key in obj, add 1 to count 
        -- if not & if char is a number/letter & key in obj, add it to obj
        -- if char is something else, ignore.
        //return obj @ end
    }

    ======================
    23. solve or simplify
    ======================

    solve the problem if you can
    if you can't, focus on another part of the problem and focus on something else

    simplify
    ========

    -- 1. find the core difficulty in what you are trying to do
    -- 2. temporarily ignore that difficulty 
    -- 3. write a simplified solution
    -- 4. then incorporate that difficulty back in

    ==========================
    24. look back and refactor 
    ==========================

    -- 1. can you check the result
    -- 2. can you understand at a glance
    -- 3. can you use result or method for some other problem 
    -- 4. can you improve the perf. of your solution
    -- 5. can you think of other ways to refactor?
    -- 6. how have others soilved this problem?
*/

let test = 'hello ! world'

function charCount(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0 ) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result; // return the object w/ results of function
}

console.log(charCount(test));

//refactor - to use more modern and clean syntax (for of)
function charCountRefact(str) {
    let obj = {}
    for (var char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}

//further refactor
function charCountRefact(str) {
    let obj = {}
    for (var char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] > 0 ? obj[char]++ : obj[char] = 1; 
        }
    }
    return obj;
}
  
  


