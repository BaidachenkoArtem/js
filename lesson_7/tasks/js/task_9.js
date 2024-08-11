"use strict"

// Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.

function getNumberNegativeTemperature(temperature1 = 0, temperature2 = 0, temperature3 = 0) {
	let negativeTemperature = 0

	if (temperature1 < negativeTemperature)
		negativeTemperature++

	if (temperature2 < negativeTemperature)
		negativeTemperature++

	if (temperature3 < negativeTemperature)
		negativeTemperature++
	      
	return negativeTemperature
}

let a = parseFloat(prompt(`Введіть перше значення температури`,`10`))
let b = parseFloat(prompt(`Введіть друге значення температури`,`-20`))
let c = parseFloat(prompt(`Введіть третє значення температури`,`-5`))

document.write(`Кількість від’ємних показів температури = ${getNumberNegativeTemperature(a, b, c)}`)