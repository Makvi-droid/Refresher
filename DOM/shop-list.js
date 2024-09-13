const shopInput = document.getElementById('item');
const btn = document.querySelector('.btn');
const content = document.querySelector('.input-content');

btn.addEventListener('click', function(){
    paragraphContent();
});

function paragraphContent(){
    const itemContainer = document.createElement('div');
    const newItem = document.createElement('p');

    content.textContent = shopInput.value;
    const dltBtn = document.createElement('button');
    content.appendChild(dltBtn);
    itemContainer.appendChild(content);
    dltBtn.textContent = 'Delete';
    dltBtn.addEventListener('click', function(){
        content.remove();
    });
}



