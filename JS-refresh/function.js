function favoriteAnimal(animal){

    return animal;

}

console.log("My favorite animal is a " + favoriteAnimal("lion"));

//add function
function add7(a){
    return a + 7;
}
console.log(add7(10));

//multiply function
function multiply(num1, num2){
    return num1 * num2;
}
console.log(multiply(5, 6));


//return only 1st letter capital
function capitalize(string){
    return string.toUpperCase().charAt(0) + string.slice(1).toLowerCase();
}

console.log(capitalize("jaVaScRiPT"));

//return only the last letter
function lastLetter(str){
    return str.slice(-1);
}

console.log(lastLetter("Kimiya"));

function isValidEmail(email){
    if(email.includes('@')){
        return console.log("Email is valid");
    }
    else{
        return console.log("Email is invalid");
    }
}

console.log(isValidEmail("email.fake.com"));



