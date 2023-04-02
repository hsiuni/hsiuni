let addBtn = document.querySelector('#add-btn');
let itemName = document.querySelector('#item-name');
let item = document.querySelector('#item');

const appendItem = (name) => {
    let li = document.createElement('li');
    let input = document.createElement('input');
    let div = document.createElement('div');

    div.innerHTML = name;
    input.type = 'checkbox';

    li.appendChild(input);
    li.appendChild(div);

    item.appendChild(li);
}


addBtn.addEventListener(`click`)