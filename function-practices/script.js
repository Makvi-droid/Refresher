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

let solveBtn = document.querySelector('.solve');
let number = document.querySelector('.number');

function addNumbers(x, y){
    return x + y;
}




