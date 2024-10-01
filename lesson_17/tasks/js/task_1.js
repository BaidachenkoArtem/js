"use strict"

/*
	Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)
*/	

if (confirm("Почати тестування?")) {	

	class ArrayOperations {
		static countPositive(arr) {
			return arr.filter(num => num > 0).length;
		}
	 
		static countNegative(arr) {
			return arr.filter(num => num < 0).length;
		}
	 
		static countOccurrences(arr, target) {
			return arr.filter(num => num === target).length;
		}
	}

	const array = [1, -2, 3, 4, -5, -2, 0, 3, 3];
	 
	console.log(ArrayOperations.countPositive(array));
	console.log(ArrayOperations.countNegative(array));
	console.log(ArrayOperations.countOccurrences(array, 3));

}