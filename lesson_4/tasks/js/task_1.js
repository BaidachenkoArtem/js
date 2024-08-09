"use strict"
// Комп’ютер випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах від 1 до 100). Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, або розташоване від нього (від лівого або правого краю) не більше ніж на 10.

//Крок 0. Позначення величин

// rundomNumberInterval - випадкове число від 1 до 100
// minValueInterval - 1,
// maxValueInterval - 100

//Крок 1. Введення необхідних даних

let maxValueInterval = 100
let minValueInterval = 1

maxValueInterval = Math.floor(Math.random() * (maxValueInterval - minValueInterval + 1) + minValueInterval)
minValueInterval = Math.floor(Math.random() * (maxValueInterval - minValueInterval) + minValueInterval)

let rundomNumberInterval = parseInt(prompt('Вгадай число, яке знаходиться у цьому проміжку', '50'))

let result = ""

//Крок 2. Обчислення
if (rundomNumberInterval >= minValueInterval && rundomNumberInterval <= maxValueInterval ||
	rundomNumberInterval >= minValueInterval - 10 && rundomNumberInterval <= maxValueInterval ||
	rundomNumberInterval <= maxValueInterval + 10 && rundomNumberInterval >= minValueInterval)
	result = 'Ви відгадали числовий інтервал'
else
	result = 'Ви не відгадали числовий інтервал'

document.write(`${result}`)