const input = document.getElementById('add-input');
const addBtn = document.getElementById('add-btn');
const listItems = document.getElementById('list-items');

function addButton(li){
    let remove = document.createElement('button');
    remove.className = 'btn remove ';
    remove.style = 'color: white; background-color: #534666';
    remove.textContent = 'x';
    li.appendChild(remove);
}

addBtn.addEventListener('click', ()=>{
    let item = input.value;
    if (input.value.length != 0) {
        let li = document.createElement('li');
        li.className = 'd-flex justify-content-between px-5 mx-5 py-2';
        li.textContent = item;
        addButton(li)
        listItems.appendChild(li);
        input.value = '';
    }
});

listItems.addEventListener('click', (event) =>{
    if (event.target.tagName == 'BUTTON') {
        let li = event.target.parentNode;
        listItems.removeChild(li);
    }
})
