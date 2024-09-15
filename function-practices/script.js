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
const factorBtn = document.querySelector('.factor');
const factorSpan = document.querySelector('.factorial');

function factorial(n){

    let result = 1;
    for(i = 1; i <= n; i++){

        result *= i;

    }
    return result

}
console.log(factorial(5));


factorBtn.addEventListener('click', function(){
    const span = factorial(5);
    factorSpan.textContent = span; 
});

//count vowels
const countVowelsBtn = document.querySelector('.countVowels');
const vowelSpan = document.querySelector('.countSpan');

function countVowels(str){
    let vowelCount = 0;
    let vowels = 'aeiouAEIOU';

    for(let char of str){
        if(vowels.includes(char)){
            vowelCount++;
        }
    }
    return vowelCount;
    
}
console.log(`There is/are ${countVowels('Monkey')} vowels`);

countVowelsBtn.addEventListener('click', function(){
    let vow = countVowels('Monkey');
    vowelSpan.textContent = `There is/are ${vow} vowels`;
});

//reverse String
let rvrsBtn = document.querySelector('.rvrsBtn');
let rvrsSpan = document.querySelector('.rvrsSpan');

function reverseString(string){
    let splitString = string.split('');
    let reverseString = splitString.reverse();
    let joinString = reverseString.join('');
    return joinString;
}

console.log(reverseString('Hello'));

rvrsBtn.addEventListener('click', function(){
    const stri = reverseString('Hello');
    rvrsSpan.textContent = stri;
});


//palindrome checker
let palBtn = document.querySelector('.palBtn');
let palSpan = document.querySelector('.palSpan');

function palindromeChecker(palindrom){

    let normalString = palindrom.toLowerCase();

    let palindromeString = palindrom.split('').reverse().join('');

    if(palindromeString === normalString){
        return 'Word is a palindrome';
    }
    else{
        return 'Word is not a palindrome';
    }

}

console.log(palindromeChecker('baby'))

palBtn.addEventListener('click', function(){

    let palWord = palindromeChecker('baby');
    palSpan.textContent = palWord;

});






