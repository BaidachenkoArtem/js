"use strict"
// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

//Крок 0. Позначення величин
// motorСycle - А-мотоцикл
// autoСar - В-легковий автомобіль
// autoTruck - С-вантажний автомобіль

//Крок 1. Введення необхідних даних
let nameDriversCategories = prompt('Введіть назву категорії водія на латиниці', 'B')

const motorСycle = 'A'
const autoСar = 'B'
const autoTruck = 'C'

//Крок 2. Обчислення
if (nameDriversCategories === motorСycle)
	alert(`Ви можете керувати мотоциклом`)
else if (nameDriversCategories === autoСar)
	alert(`Ви можете керувати легковим автомобілем`)
else if (nameDriversCategories === autoTruck)
	alert(`Ви можете керувати вантажним автомобілем`)
else
	alert(`Ви не можете керувати транспортним засобом`)
