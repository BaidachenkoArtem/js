"use strict"

/*
	Список, у якому можна вибирати елементи (вибраний елемент підсвічується рамкою).
*/


const listItems = document.querySelectorAll('#selectable-list li');


function selectItem(event) {
    listItems.forEach(item => {
        item.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

listItems.forEach(item => {
    item.addEventListener('click', selectItem);
});