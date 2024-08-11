"use strict"

// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів:
// кількість парних,
// кількість додатних,
// кількість більших за 100.

function analyzeNumbers(num1, num2, num3) {
	let evenCount = 0;
	let positiveCount = 0;
	let greaterThanCount = 0;

	// Знаходимо кількість парних чисел

	const evenNumber = function (num) {
		return num % 2 === 0
	}

	if (evenNumber(num1)) {
		evenCount++
	}
	if (evenNumber(num2)) {
		evenCount++
	}
	if (evenNumber(num3)) {
		evenCount++
	}

	// Знаходимо кількість додатних чисел

	const positiveNumber = function (num) {
		return num > 0
	}

	if (positiveNumber(num1)) {
		positiveCount++
	}
	if (positiveNumber(num2)) {
		positiveCount++
	}
	if (positiveNumber(num3)) {
		positiveCount++
	}

	// Знаходимо кількість чисел більших за 100

	const greaterThanNumber = function (num) {
		return num > 100
	}

	if (greaterThanNumber(num1)) {
		greaterThanCount++
	}
	if (greaterThanNumber(num2)) {
		greaterThanCount++
	}
	if (greaterThanNumber(num3)) {
		greaterThanCount++
	}

	return {
	  evenCount,
	  positiveCount,
	  greaterThanCount,
	};
}
 
let num1 = parseFloat(prompt("Вкажіть перше число:", "200"));
let num2 = parseFloat(prompt("Вкажіть друге число:", "-100"));
let num3 = parseFloat(prompt("Вкажіть третє число:", "36.6"));


document.write(`<div>
		Введені числа: ${num1},${num2},${num3}<br> 
		Кількість парних чисел: ${analyzeNumbers(num1, num2, num3).evenCount}<br>
  		Кількість додатних чисел: ${analyzeNumbers(num1, num2, num3).positiveCount}<br>
  		Кількість більших за 100: ${analyzeNumbers(num1, num2, num3).greaterThanCount}<br>
	</div>
`);
 