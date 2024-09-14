const username =  document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const reEnterPassword = document.getElementById('re-enter-password');
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById('form');
const error = document.getElementById('error');


form.addEventListener('submit', function(e){
    let message = [];

    if(username.value === '' || username.value == null){
        message.push('Username is required');
    }
    
    if(message.length > 0){
        e.preventDefault();
        error.innerText = message.join(', ');
    }
    
});
