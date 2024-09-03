"use strict"

/*
	Знайти суми елементів у вказаній області

	1) номери рядків від 0 до половини, стовпці від 0 до половини
	2) номери рядків від 0 до половини, стовпці від половини до кінця
	3) номери рядків (від половини до кінця, стовпці від 0 до половини)
	4) номери рядків від половини до кінця , стовпці від половини до кінця
	5) Суму парних рядків
	6) Суму непарних стовпців
	7) У парних рядках – непарні стовпці, у непарних – парні.

*/

if (confirm("Почати тестування?")) {

	let arr = [
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12, 1],
		[13, 14, 15, 16, 4],
		[17, 18, 19, 20],
	];

	const rows = arr.length;
	const cols = arr[0].length;

	const halfRows = Math.floor(rows / 2);
	const halfCols = Math.floor(cols / 2);
 
	// 1) номери рядків від 0 до половини, стовпці від 0 до половини
	function task1(arr) {
		let sum = 0;
		for (let rowNum = 0; rowNum < halfRows; rowNum++) {
			for (let colNum = 0; colNum < halfCols; colNum++) {
				sum += arr[rowNum][colNum];
			}
		}
		return sum;
	}
	document.write(`<div>1) номери рядків від 0 до половини, стовпці від 0 до половини: ${task1(arr)}</div>`)

	// 2) номери рядків від 0 до половини, стовпці від половини до кінця
	function task2(arr) {
		let sum = 0;
		for (let rowNum = 0; rowNum < halfRows; rowNum++) {
			for (let colNum = rowNum; colNum < halfRows; colNum++) {
				sum += arr[rowNum][colNum];
			}
		}
		return sum;
	}
	document.write(`<div>2) номери рядків від 0 до половини, стовпці від половини до кінця: ${task2(arr)}</div>`)
 
	// 3) номери рядків від половини до кінця, стовпці від 0 до половини
	function task3(arr) {
		let sum = 0;
		for (let rowNum = halfRows; rowNum < rows; rowNum++) {
			for (let colNum = 0; colNum < halfCols; colNum++) {
				sum += arr[rowNum][colNum];
			}
		}
		return sum;
	}
	document.write(`<div>3) номери рядків (від половини до кінця, стовпці від 0 до половини): ${task3(arr)}</div>`)
 
	// 4) номери рядків від половини до кінця, стовпці від половини до кінця
	function task4(arr) {
		let sum = 0;
		for (let rowNum = halfRows; rowNum < rows; rowNum++) {
			for (let colNum = 0; colNum < cols; colNum++) {
				sum += arr[rowNum][colNum];
			}
		}
		return sum;
	}
	document.write(`<div>4) номери рядків від половини до кінця , стовпці від половини до кінця: ${task4(arr)}</div>`)
 
	// 5) Суму парних рядків
	function task5(arr) {
		let sum = 0;
		for (let rowNum = 0; rowNum < rows; rowNum += 2) {
			for (let colNum = 0; colNum < cols; colNum++) {
				sum += arr[rowNum][colNum]
			}
		}
		return sum;
	}
	document.write(`<div>5) Суму парних рядків: ${task5(arr)}</div>`)
 
	// 6) Суму непарних стовпців
	function task6(arr) {
		let sum = 0;
		for (let rowNum = 0; rowNum < rows; rowNum++) {
			for (let colNum = 1; colNum < cols; colNum += 2) {
				sum += arr[rowNum][colNum]
			}
		}
		return sum;
	}
	document.write(`<div>6) Суму непарних стовпців: ${task6(arr)}</div>`)
 
	// 7) У парних рядках – непарні стовпці, у непарних – парні.
	function task7(arr) {
		let sum = 0;
		let sum2 = 0;
		for (let rowNum = 0; rowNum < rows; rowNum++) {
			for (let colNum = 0; colNum < cols; colNum++) {
				if (rowNum % 2 === 0) {
					if (colNum % 2 !== 0) sum += arr[rowNum][colNum];
				} else {
					if (colNum % 2 === 0) sum2 += arr[rowNum][colNum];
				}
			}
		}
		return [sum, sum2];
	}
	document.write(`<div>7) У парних рядках – непарні стовпці, у непарних – парні: ${task7(arr)}</div>`)
}