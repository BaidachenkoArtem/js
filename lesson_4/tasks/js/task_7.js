"use strict"
// З клавіатури вводиться кількість сторін багатокутника. Необхідно вивести назву фігури («трикутник», «чотирикутник», «п’ятикутинк», «шестикутник»).
//Крок 0. Позначення величин

// numberPolygon - кількість сторін багатокутника

//Крок 1. Введення необхідних даних
let numberPolygon = parseInt(prompt('Введіть кількість сторін багатокутника'))
let result = ""

//Крок 2. Обчислення

if (numberPolygon === 3)
	result = `Трикутник`
else if (numberPolygon === 4)
	result = `Чотирикутник`
else if (numberPolygon === 5)
	result = `П’ятикутник`
else if (numberPolygon === 6)
	result = `Шестикутник`
else if (numberPolygon < 3)
	document.write(`Помилка фігура повинна будуватися 3 сторін`)
	
document.write(`Фігура ${result}`)

// Використовуємо switch

// const numberPolygon = parseInt(prompt('Введіть кількість сторін багатокутника'))
// let result

// if (numberPolygon > 3) {
// 	switch (numberPolygon) {
// 		case 3:
// 			result = '«трикутник»'
// 			break;
// 		case 4:
// 			result = '«чотирикутник»'
// 			break;
// 		case 5:
// 			result = '«п’ятикутник»'
// 			break;
// 		case 6:
// 			result = '«шестикутник»'
// 			break;
// 		default:
// 			result = 'Якийсь багатокутник'
// 			break;
// 	}
// 	document.write(`Фігура: ${result}`)
// }
// else
// 	document.write(`Помилка фігура повинна будуватися 3 сторін`)