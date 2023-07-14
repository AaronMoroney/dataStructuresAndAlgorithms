//14. https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344084#overview - obj

//obj = unordered, key & value pairs
let instructor = {
    name: 'kelly',
    thoughtLanguage: 'javascript',
    favouriteNumbers: [4,9,22] 
}

console.log(instructor); //
console.log(Object.keys(instructor)); //O(n)
console.log(Object.entries(instructor)); //O(n)
console.log(instructor.hasOwnProperty('name')); //0(1)


//15. big-O of objs?
/*
    Big-O of Objs.

    insertion - 0(1)
    removal - 0(1)
    searching - 0(n)
    access - 0(1)
*/

//16. arrays when are they slow?
let names = ['michael', 'melissa', 'andrea'];
let values = [true, {}, [], 'awesome'];

/*
    arrays are ordered 
    access = 0(1)
    -- uses a direct shortcut to the element you need, eg: console.log(names[3]);
*/

names.push('raj');
console.log(names);

//insertion.. it depends - using the .push method, O(1). no rearrangment
//all the indexes have to be rearranged 

names.unshift('lauren');
console.log(names)

//push and pop, faster than shift + unshift

/*
    push - O(1)
    pop - O(1)
    shift - O(n)
    unshift - O(n)
    concat - O(n)
    slice - O(n)
    splice - O(n)
    sort - O(n * logN)
    forEach/map/filter/reduce/etc. - O(n)
*/












