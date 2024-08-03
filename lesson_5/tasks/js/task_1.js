"use strict"
//Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.

let totalUserNumber = parseInt(prompt("Введіть кількість випадкових чисел:"));
let result = "";

for (let i = 0; i < 1; i++) {
	result += `<ul>`
	for (let runNumber = 0; runNumber < totalUserNumber; runNumber++) {
		let runNumber = Math.floor(Math.random() * 100) + 1;
		result += `<li>${runNumber}</li>`;
		}
	result += `</ul>`
}

document.write(`${result}`);