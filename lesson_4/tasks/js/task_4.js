"use strict"
// Модифікувати попередню задачу з можливістю після пострілу переміщення корабля у випадковим чином вибрану сусідню клітинку (якщо звичайно корабель не було потоплено за першим разом).

let numSquare = parseInt(prompt('Введіть кількість квадратів', '5'))
let oneShot = parseInt(prompt(`Введіть квадрат в який будете стріляти (квадрати від ${1} до ${numSquare}):`))
let randomPositionShip = Math.floor(Math.random() * (numSquare - 1 + 1) + 1)

if (oneShot > 0 && oneShot <= numSquare) {
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

		let moveRightShip = Math.floor(Math.random() * (numSquare - 1 + 1) + 1)
		if (moveRightShip && randomPositionShip < numSquare ||
			!moveRightShip && randomPositionShip === 1
		) randomPositionShip++
		else randomPositionShip--
		let twoShot = parseInt(prompt(`Введіть квадрат в який будете стріляти (квадрати від ${1} до ${numSquare}):`))
		if (twoShot === randomPositionShip)
			alert(`Корабель потоплено`)
		else
			alert(`Ви програли, вам не вдалося потопити корабель`)
	}
}