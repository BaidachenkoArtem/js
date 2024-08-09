"use strict"
// Комп’ютер загадує число від 1 до 10. Двоє користувачів надають свої відповіді. Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.

//Крок 1. Введення необхідних даних
const compNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1)
const answerUserOne = parseInt(prompt('Вгадай число', '1'))
const answerUserTwo = parseInt(prompt('Вгадай число', '5'))

let numOneUser = Math.abs(compNumber - answerUserOne)
let numTwoUser = Math.abs(compNumber - answerUserTwo)

let result

if (numOneUser < numTwoUser)
	result = 'перший користувач'
else if (numTwoUser < numOneUser)
	result = 'другий користувач'
else
	result = 'Ні хто'

document.write(`Переміг ${result}`)
