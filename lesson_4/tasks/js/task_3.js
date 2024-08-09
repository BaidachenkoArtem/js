"use strict"
// Морський бій. Ворожий корабель, може знаходитись в одному із квадратів (кількість квадратів вводиться з клавіатури), які розташовані лінійно (один за одним) на річці.
let numSumSquare = parseInt(prompt('Введіть кількість квадратів', '5'))
let oneShot = parseInt(prompt(`Введіть квадрат в який будете стріляти (квадрати від ${1} до ${numSumSquare}):`))
let randomPositionShip = Math.floor(Math.random() * (numSumSquare - 1 + 1) + 1)

if (oneShot > 0 && oneShot <= numSumSquare) {
	if (oneShot === randomPositionShip)
		alert(`Корабель потоплено`)
	else {
		if (
			oneShot + 1 === randomPositionShip ||
			oneShot - 1 === randomPositionShip
		)
			alert(`Корабель пошкоджено`)
		else
			alert(`Ви не змогли потопити корабель`)
		let twoShot = parseInt(prompt(`Введіть квадрат в який будете стріляти (квадрати від ${1} до ${numSumSquare}):`))
		if (twoShot === randomPositionShip)
			alert(`Корабель потоплено`)
		else
			alert(`Ви програли, вам не вдалося потопити корабель`)
	}
}