let array = [0,0,1,2,1];

//https://www.hackerrank.com/challenges/lonely-integer/problem?h_r=internal-search

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

