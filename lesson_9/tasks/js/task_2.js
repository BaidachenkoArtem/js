"use strict"

// Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

if (confirm("Почати тестування?")) {

	function createArray(length) {
		const array = new Array(length);
		const middle = Math.floor(length / 2);
		for (let i = 0; i < length; i++) {
			if (i < middle) {
				array[i] = 1;
			} else {
				array[i] = 7;
			}
		}
		return array;
	}

	const length = parseInt(prompt("Введіть кількість елементів:", "10"));
	const result = createArray(length);

	document.write(`${result}`)

}