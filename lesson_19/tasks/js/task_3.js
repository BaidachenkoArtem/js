"use strict"

/*
	Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.
*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomLists() {
    const listsContainer = document.querySelector('.lists-container');
    
    for (let i = 0; i < 5; i++) {
        const listLength = getRandomNumber(1, 10);
        
        const ol = document.createElement('ol');
        
        for (let j = 0; j < listLength; j++) {
            const li = document.createElement('li');
            li.textContent = getRandomNumber(1, 100);
            ol.appendChild(li);
        }
        listsContainer.appendChild(ol);
    }
}
function colorLists() {
    const lists = document.querySelectorAll('ol');
    
    lists.forEach(list => {       
        const listLength = list.querySelectorAll('li').length
        if (listLength % 2 === 0) {
            list.classList.add('green');
            list.classList.remove('red');
        } else {
            list.classList.add('red');
            list.classList.remove('green');
        }
    });
}
generateRandomLists();
document.getElementById('colorButton').addEventListener('click', colorLists);