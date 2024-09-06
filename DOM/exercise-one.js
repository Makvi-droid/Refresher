const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

let paragraph = document.querySelector('p');
paragraph.textContent = "Hey Im red!";
paragraph.style.color = 'red';
paragraph.style.fontSize = '2rem';

let headingThree = document.querySelector('h3');
headingThree.textContent = 'Im a blue h3!';
headingThree.style.color = 'blue';
headingThree.style.fontSize = '2.8rem';