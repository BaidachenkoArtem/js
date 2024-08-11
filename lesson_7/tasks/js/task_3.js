"use strict"

// Створити окремі функції, які для 4 чисел знаходять:

// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

// Знаходимо суму

function getSumNumbers(a, b, c, d) {
	let sum = a + b + c + d
	return sum
}

let a = 5
let b = 8
let c = 12
let d = 1

document.write(`<div>Сума чисел дорівнює ${getSumNumbers(a, b, c, d)}</div>`)

// Знаходимо добуток

function getProductNumbers(a, b, c, d) {
	let product = a * b * c * d
	return product
}

document.write(`<div>Добуток чисел дорівнює ${getProductNumbers(a, b, c, d)}</div>`)

// Знаходимо середнє арифметичне

function getArithmeticMeanNumbers(a, b, c, d) {
	let arithmetic = (a + b + c + d) / 4
	return arithmetic
}

document.write(`<div>Cереднє арифметичне чисел дорівнює ${getArithmeticMeanNumbers(a, b, c, d)}</div>`)

// Знаходимо мінімальне значення

function getMinNumbers(a, b, c, d) {

	let minNumber = Math.min(a,b,c,d)
	return minNumber
}

document.write(`<div>Мінімальне значення чисел дорівнює ${getMinNumbers(a, b, c, d)}</div>`)