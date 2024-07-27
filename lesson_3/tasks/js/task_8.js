"use strict"

//Крок 0. Позначення величин
// cheerful - веселий
// sad - сумний
// indignant - обурений

//Крок 1. Введення необхідних даних
let itemlistNumber = parseInt(prompt('Введіть номер пункту меню', ''))

const cheerful = 1
const sad = 2
const indignant = 3

//Крок 2. Обчислення
if (itemlistNumber === cheerful)
	document.write(`:)`)
else if (itemlistNumber === sad)
	document.write(`:`)
else if (itemlistNumber === indignant)
	document.write(`:(`)
else
	alert('Помилка!')
