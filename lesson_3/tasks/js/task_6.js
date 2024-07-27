"use strict"
// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

//Крок 0. Позначення величин
// mondayNumber - понеділок
// tuesdayNumber - вівторок
// wednesdayNumber - середа
// thurdayNumber - четверг
// fridayNumber - п'ятниця
// saturdayNumber - субота
// sundayNumber - неділя

//Крок 1. Введення необхідних даних
let dayWeekNumber = parseInt(prompt('Введіть номер дня тижня', '2'))

const mondayNumber = 1
const tuesdayNumber = 2
const wednesdayNumber = 3
const thurdayNumber = 4
const fridayNumber = 5
const saturdayNumber = 6
const sundayNumber = 7

//Крок 2. Обчислення

if (mondayNumber === dayWeekNumber)
	alert(`Понеділок`)
else if (dayWeekNumber === tuesdayNumber)
	alert(`Вівторок`)
else if (dayWeekNumber === wednesdayNumber)
	alert(`Середа`)
else if (dayWeekNumber === thurdayNumber)
	alert(`Четверг`)
else if (dayWeekNumber === fridayNumber)
	alert(`П'ятниця`)
else if (dayWeekNumber === saturdayNumber)
	alert(`Субота`)
else if (dayWeekNumber === sundayNumber)
	alert(`Неділя`)
else
	alert(`Помилка! Ви ввели неправильно`)
