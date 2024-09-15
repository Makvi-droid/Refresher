let greetBtn = document.querySelector('.greet');
let answer = document.querySelector('.answer');

//greet activity
function greetUser(name){
    return "Hello I am " + name;
}
console.log(greetUser('Jason'));

greetBtn.addEventListener('click', function(){
    let name = greetUser('John');
    answer.textContent = name;
});


//add function act
let solveBtn = document.querySelector('.num');
let number = document.querySelector('.number');

function addNumbers(x, y){
    return x + y;
}
console.log(addNumbers(5, 5));

solveBtn.addEventListener('click', function(){
    const nums = addNumbers(5, 10);
    number.textContent = nums;
});







