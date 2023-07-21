let array = [0,0,1,2,1];

/*
 * Given an array of integers, where all elements but one occur twice, find the unique element.
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    let sortedArray =[];
    let duplicates = [];
    for(let i = 0; i < a.length; i++) {
        if(!sortedArray.includes(a[i])) {
            sortedArray.push(a[i]);
        } else {
            duplicates.push(a[i]);
        }
    }
    let lonelyInteger = sortedArray.filter(function(dupe) {
        return !duplicates.includes(dupe);
    })
    return lonelyInteger[0];
}

lonelyinteger(array)

