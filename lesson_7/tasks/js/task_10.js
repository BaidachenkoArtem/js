"use strict"

// Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

function getArithmeticMeanTemperature(temperature1 = 0, temperature2 = 0, temperature3 = 0) {
	let positiveTemperature = 0
	let totalTemperature = 0
	
	if (temperature1 > 0) {
		positiveTemperature++
		totalTemperature+= temperature1
	}
	if (temperature2 > 0) {
		positiveTemperature++
		totalTemperature+= temperature2
	}
	if (temperature3 > 0) {
		positiveTemperature++
		totalTemperature+= temperature3
	}

	let arithmeticTemperature = totalTemperature / positiveTemperature
	return arithmeticTemperature
}

let a = parseFloat(prompt(`Введіть перше значення температури`,`10`))
let b = parseFloat(prompt(`Введіть друге значення температури`,`20`))
let c = parseFloat(prompt(`Введіть третє значення температури`,`-5`))

document.write(`Cереднє значення для додатних показів температури = ${getArithmeticMeanTemperature(a, b, c)}°C`)
