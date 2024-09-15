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

//Even or odd
let evenBtn = document.querySelector('.even');
let evenSpan = document.querySelector('.evenOrOdd');

function isEven(num){
    let even = true
    let odd = false;

    if(num % 2 == 0){
        return even;
    }
    else{
        return odd;
    }
}

console.log(isEven(4));

evenBtn.addEventListener('click', function(){

    const ans = isEven(4);
    evenSpan.textContent = ans ? "Even" : "Odd";

});

//factorial






