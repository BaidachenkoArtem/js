"use strict"

// Дано масив елементів. Знайти добуток додатних елементів

if (confirm("Почати тестування?")) {
	
	function getRandomNum(min = 1, max = 20) {
		return min + Math.floor(Math.random() * (max - min + 1));
	}

	function getNewArray(length = 5) {
		const array = new Array(length);
	 
		for (let i = 0; i < length; i++) {
		  array[i] = getRandomNum();
		}
	 
		return array;
	}

	function getProductNum(array) {
		let product = 1

		for (const elementNum of array) {
			if (elementNum > 0)
			product *= elementNum
		}

		return product	
	}

	const elementNum = parseInt(prompt("Вкажіть кількість елементів", "5"));
	const array = getNewArray(elementNum);

	document.write(`
		Дано масив: <div>${array}<div>
		Добуток: <div>${getProductNum(array)}<div>
	`)
}