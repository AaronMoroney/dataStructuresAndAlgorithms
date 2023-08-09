//https://www.hackerrank.com/challenges/grading/problem



function gradingStudents(grades) {
    // Write your code here
    let newGrades = [];
    for (let i = 0; i < grades.length; i++ ) {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
        let nearestMultiple = Math.ceil(grades[i] / 5) * 5
        // guard clause for fail
        if (grades[i] < 38) {
            newGrades.push(grades[i]);
        } else if (nearestMultiple - grades[i] < 3) {
            newGrades.push(nearestMultiple);
        } else {
            newGrades.push(grades[i])
        }  
    }
  return(newGrades); 
}