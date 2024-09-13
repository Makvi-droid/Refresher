const shopInput = document.getElementById('item');
const btn = document.querySelector('.btn');
const content = document.querySelector('.input-content');

btn.addEventListener('click', function(){
    paragraphContent();
});

function paragraphContent(){
    const itemContainer = document.createElement('div');
    
    const newItem = document.createElement('p');
    newItem.textContent = shopInput.value;

    const dltBtn = document.createElement('button');
    dltBtn.textContent = 'Delete';

    itemContainer.appendChild(newItem);
    itemContainer.appendChild(dltBtn);

    content.appendChild(itemContainer);

    dltBtn.addEventListener('click', function() {
        content.removeChild(itemContainer);
    });

    shopInput.value = '';
}



