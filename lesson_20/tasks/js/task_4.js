"use strict"

/*
	На сторінці міститься певна кількість кнопок і інпутів. Підраховувати загальну кількість кліків окремо на кнопках і окремо на інпутах.
*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
let buttonClickCount = 0;
let inputClickCount = 0;

// Отримуємо всі кнопки і додаємо обробник подій
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttonClickCount++;
        document.getElementById('button-count').textContent = buttonClickCount;
    });
});

// Отримуємо всі інпути і додаємо обробник подій
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('click', () => {
        inputClickCount++;
        document.getElementById('input-count').textContent = inputClickCount;
    });
});
//=============== Мій варіант2 ==================