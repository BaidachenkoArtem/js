"use strict"

// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
//Крок 0. Позначення величин

// rundomNumber - випадкове число від 1 до 5
// minValue - 1,
// maxValue - 5

//Крок 1. Введення необхідних даних

const minValue = 1
const maxValue = 5

let numUserValue = parseFloat(prompt('Введіть число', ''))

//Крок 2. Обчислення

let rundomNumber = minValue + Math.floor(Math.random() * (maxValue - minValue + 1)) 

if (numUserValue === rundomNumber)
	alert('Ви вгадали!')
else {
	numUserValue = parseInt(prompt('Ви не вгадали. Введіть  число', ''))
	if (numUserValue === rundomNumber)
		alert('Вітаємо! Ви вгадали')
		else
			alert('Ви не вгадали')
}