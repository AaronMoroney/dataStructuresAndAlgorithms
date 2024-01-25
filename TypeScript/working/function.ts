console.log('hello world');
//have to assign the number 
function addTwo(num: number) {
   return num + 2 
};

function getUpper(val: string) {
    return val.toUpperCase(); 
}

function signUp(name: string, email: string, isPaid: boolean) {
    console.log(name);
    console.log(email);
    console.log(isPaid);
}

let loginUser = (email: string, isPaid: boolean = false) => {
    console.log(email);
    console.log(isPaid);
}

loginUser('a@a.com');
signUp('john', 'john@john.com', true);

// Corrected function call
getUpper('hello');


// FUNCTION PART II







