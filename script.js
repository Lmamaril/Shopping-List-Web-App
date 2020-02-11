const input = document.getElementById('add-input');
const addBtn = document.getElementById('add-btn');
const listItems = document.getElementById('list-items');

function addButton(li){
/*

<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
*/
    let buttons = document.createElement('div');
    buttons.className = "btn-grp";
    buttons.setAttribute('role', 'group');
    buttons.setAttribute('aria-labeled', 'buttonsGroup');

    let up = document.createElement('button');
    up.setAttribute('type', 'button');
    up.id = 'up';
    up.className = 'btn btn-secondary mx-1';
    up.style = 'color: white; background-color: #138086';
    up.textContent = '  Up  ';
    buttons.appendChild(up);

    let down = document.createElement('button');
    down.setAttribute('type', 'button');
    down.id = 'down';
    down.className = 'btn btn-secondary mx-1';
    down.style = 'color: white; background-color: #534666';
    down.textContent = ' Down ';
    buttons.appendChild(down);

    let remove = document.createElement('button');
    remove.id = 'remove';
    remove.setAttribute('type', 'button');
    remove.className = 'btn btn-secondary mx-1';
    remove.style = 'color: white; background-color: #CD7672';
    remove.textContent = 'Delete';
    buttons.appendChild(remove);
    
    li.appendChild(buttons);
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
        if (event.target.id == 'remove') {
            let li = event.target.parentNode.parentNode;
            listItems.removeChild(li);
        }
        else if (event.target.id == 'up') {
            let li = event.target.parentNode.parentNode;
            let prevLi = li.previousElementSibling;
            listItems.insertBefore(li, prevLi);
        }
        else if (event.target.id == 'down') {
            let li = event.target.parentNode.parentNode;
            let nextLi = li.nextElementSibling;
            listItems.insertBefore(nextLi,li);
        }
    }
});
