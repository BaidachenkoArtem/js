"use strict"
// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
//Крок 0. Позначення величин

//Крок 1. Введення необхідних даних
let monthNumber = parseInt(prompt('Введіть номер місяця', '3'))

const januaryNumber = 1
const februaryNumber = 2
const marchNumber = 3
const aprilNumber = 4
const mayNumber = 5
const juneNumber = 6
const juleNumber = 7
const augustNumber = 8
const septemberNumber = 9
const octoberNumber = 10
const novemberNumber = 11
const decemberNumber = 12

//Крок 2. Обчислення

if (decemberNumber === monthNumber || januaryNumber === monthNumber || februaryNumber === monthNumber)
	alert(`Зима`)
else if (marchNumber === monthNumber || aprilNumber === monthNumber || mayNumber === monthNumber)
	alert(`Весна`)
else if (juneNumber === monthNumber || juleNumber === monthNumber || augustNumber === monthNumber)
	alert(`Літо`)
else if (septemberNumber === monthNumber || octoberNumber === monthNumber || novemberNumber === monthNumber)
	alert(`Осінь`)
else
	alert(`Помилка! Ви ввели неправильно`)
