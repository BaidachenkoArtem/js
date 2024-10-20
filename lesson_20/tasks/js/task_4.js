"use strict"

/*
	На сторінці міститься певна кількість кнопок і інпутів. Підраховувати загальну кількість кліків окремо на кнопках і окремо на інпутах.
*/

let buttonClickCount = 0;
let inputClickCount = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttonClickCount++;
        document.getElementById('button-count').textContent = buttonClickCount;
    });
});

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('click', () => {
        inputClickCount++;
        document.getElementById('input-count').textContent = inputClickCount;
    });
});