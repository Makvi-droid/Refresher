let paragraph = document.querySelector('p');
paragraph.textContent = "Hey Im red!";
paragraph.style.color = 'red';
paragraph.style.fontSize = '2rem';

let headingThree = document.querySelector('h3');
headingThree.textContent = 'Im a blue h3!';
headingThree.style.color = 'blue';
headingThree.style.fontSize = '2.8rem';

const div = document.createElement("div");
div.style.border = '5px solid black';
div.style.backgroundColor = 'pink';
document.body.appendChild(div);

let h1 = document.createElement('h1');
h1.textContent = 'Im in a div!';
div.appendChild(h1);

let p = document.createElement('p');
p.textContent = 'Me too!';
p.style.fontSize = '1.8rem';
div.appendChild(p);