"use strict"
// Полювання. Заєць знаходиться у верхньому лівому кутку поля. Поле складається з двох рядків і двох стовпців.
// За один крок заєць може стрибнути у будь-яку із вільних клітинок. Користувач ставить пастку вказуючи номер рядка і стовпця клітинки. Якщо заєць потрапляє у пастку, то користувач виграв і отримав 100 балів. Якщо користувач зловить зайця за другою спробою, то одержує 50 балів.

// Початкова позиція зайця
let rabbitRowPosition = 0
let rabbitColumnPosition = 0
// Вводимо куди ставити пастку
let trapRowPosition = parseInt(prompt('Введіть номер рядка клітинки (0-1), де ставиться пастка'))
let trapColumnPosition = parseInt(prompt('Введіть номер стовпця клітинки (0-1), де ставиться пастка'))
// Початкова кількість балів
let numScore = 0
// Переміщаємо зайця
rabbitRowPosition = Math.floor(Math.random() * 2) 
rabbitColumnPosition = Math.floor(Math.random() * 2) 
// Обчислюємо
if (rabbitRowPosition === trapRowPosition && rabbitColumnPosition === trapColumnPosition) {
	numScore = 100
	alert(`Попався! Ви виграли і отримали 100 балів`)
}
else {
	alert('Ви не спіймали зайця, спробуйте ще раз')
	rabbitRowPosition = Math.floor(Math.random() * (2))
	rabbitColumnPosition = Math.floor(Math.random() * (2))
	trapRowPosition = parseInt(prompt('Встановити пастку, номер рядка (0, 1):'))
	trapColumnPosition = parseInt(prompt('Встановити пастку, номер колонки (0, 1):'))
		if (trapRowPosition === rabbitRowPosition && trapColumnPosition === rabbitColumnPosition) {
		alert('спіймав');
		numScore = 50
	} else
		alert('Ви не спіймали зайця і програли')
}
alert(`Кількість балів: ${numScore}`)