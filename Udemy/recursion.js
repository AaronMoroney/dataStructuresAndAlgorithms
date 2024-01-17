//https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11198354#content

/* 
    =======================
    42. why use recursion?
    =======================

    what is recursion? 
    -- a function that calls itself

    we've seen
    =======================

    function a() {
        //do something
    }
    function b() {
        call function a
    }

    ** recursive function 
    ==========================
    Q. are these numbers odd?
    
    A.
    function checkOdds() {
        //check first 
        5431 4531 5692 5612 5098 //get result
        //call function

        // check first
        4531 5692 5612 5098 //get result
        //call function
        
        //check first
        5692 5612 5098 //get result
        //call function
        
        //check first 
        5612 5098 //get result
        //call function
        
        //check first 
        5098 //get result
        //call function
        
        () //get result
        function, done
    }
   
    Recursion is everywhere!
    -
    eg: JSON.parse, JSON.stringify are recursive functions
    eg: document.getElementById & DOM traversal
    eg: Object traversal
*/

/*
    =======================
    43. the call stack
    -- e.g non recursive stack
    =======================

    
    /*

    as functions are invoked they are put on top of the stack
    they are popped off one at a time as they return / complete

    1. wake up on top of stack
    -- 2. calls take shower //returns showing, removes from stack
    -- 3. eat breakfast top of the stack
    --- 4. calls breakfast choice //returns
    -- 5. eat breakfast now returns
    -- 6. wakeup can now return
    -- 7.the stack clears 

*/

function shower() {
    console.log('showering')
} 

function eatBreakfast() {
    let meal = breakfastChoice();
    console.log(`eating ${meal}`)
}

function breakfastChoice() {
    let choices = ['eggs and sausages', 'granola', 'smoked fish on toast'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function wakeUp () {
    shower();
    eatBreakfast();
    breakfastChoice();
    console.log('ok, ready to go!')
}

wakeUp(); 

//recursive functions will keep pushing the same function over and over on the top of the stack
// has to end somewhere - where does it end?

/*
    ================================
    43. Our first recursive function
    ================================

    invoke the same func. w/ a different input until you reach your base case

    base case
    ---------

    the condition where the recursion ends

    different input
    ---------------
    for each re-occuring call
*/

function countDown(num) {
    if (num <= 0) {
        console.log('countdown done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num)
}  
countDown(10);

/*
    =================================
    44. Our second recursive function
    =================================

    function sumnRange(num) {
        if(num === 1) {
            return 1
        }
        return num + sumRange(num-1) //recursive call
    }

    sum range (4)
        -- added to call stack
        4 + sumRange(3) //returns 4 + sumRange(3)
        ---- added to call stack
            3 + sumRange(2) //returns 3
            ---- added to call stack
                2+ sumRange(1) // returns 2
                -- now num = 1 //returns 1
                -- the if statement will execute \
*/

/*
    =================================
    46. writing factorial iteratively
    =================================

    classic recursion introduction
    ---------------------------------
    4! = 4 * 3 * 2 * 1
*/

function factorialIteratively(num) {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= 1
    }
    return total;
}
factorialIteratively(4)

/*
    =================================
    47. do the same thing recursively
    =================================  
*/

function factorialRecursively(num) {
    if(num ===1) return 1;
    return num * factorialRecursively(num - 1)
}

/*
    =================================
    48. common recursion pitfalls
    =================================  
    --1. no base case
    ** How does it know when to end?
    ** repeated function calls added to the stack 
    --2. forgetting to return || returning the wrong thing 
    **
    --3. stack overflow

*/
/*
    =================================
    49. helper method recursion
    =================================  
*/


function collectOddValues(arr) {
    let result = [];
    //recursive logic
    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }
        //if first element is not divisable by 2 cleanly
        if (helperInput[0] % 2 !== 0) {
            //push helper[0] into result
            result.push(helperInput[0])
        }
        //recursively call the same function on everything except first el.
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

/*
    =================================
    50. Pure recursion
    =================================  
    Pure recursion - the FN. itself is totally self-contained & recursive

*/

function collectOddValues(arr) {
    //previously, avoid resetting empty arr. each time through would
    //reset to be empty - whats diff. is array are concataned at the end into 1.
    let newArr =[];
    
    if (arr.length === 0) {
        return newArr;
    }
    //if first number is odd
    if(arr[0] % 2 !== 0) {
        //push onto new arr
        newArr.push(arr[0]);
    }
    //[1].concat(collectOddValues[on the rest of the array])
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}





