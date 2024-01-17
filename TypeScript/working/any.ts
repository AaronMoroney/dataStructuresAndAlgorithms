let hero; //automatically inferred with 'any'
//Variable 'hero' implicitly has an 'any' type, but a better type may be inferred from usage.

function getHero() {
    return true
}

hero = getHero(); 
//this would break the consistancy of the code

let tutor: string; //explicitly inferred with type 'string'

function getTutor() {
    //return 'timur' //works
    return 5 //breaks the code
}

tutor = getTutor(); 
//type 'number' is not assignable to type 'string'