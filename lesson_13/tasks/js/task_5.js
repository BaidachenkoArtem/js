"use strict"
/*
	З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців. 
*/

if (confirm("Почати тестування?")) {
	
	//=============== Не мій варіант1 ===============
	// let myIterator = iterator(1, 12)
	// function onInputChange(button) {
	// 	setResultContainerText("")
	// 	const userValues = getUserValues()
	// 	const areValuesValid = areUserValuesValid(userValues)
	// 	if (areValuesValid)
	// 		button.onclick = onBtnClick.bind(
	// 		null,
	// 		iterator(userValues[0], userValues[1])
	// 	)
	// 	else setResultContainerText("Помилка, введіть коректні значення")
	// }
 
	// window.onload = () => {
	// 	const button = document.querySelector("button")
	// 	const inputs = document.querySelectorAll("input")
	// 	inputs.forEach((el) => (el.onkeyup = onInputChange.bind(null, button)))
	// button.onclick = onBtnClick.bind(null, iterator(1, 12))
	// }
 
	// function onBtnClick(myIteratorFunc) {
	// 	setResultContainerText(myIteratorFunc())
	// }
 
	// function iterator(min, max) {
	// 	let currentValue = min - 1
	// 	function iteration() {
	// 		if (currentValue >= max) currentValue = min
	// 		else currentValue++
	// 		return currentValue
	// 	}
	// 	return iteration
	// }
	
	// function getUserValues() {
	// 	return [...document.querySelectorAll("input")].map((el) => parseInt(el.value))
	// }
	// function areUserValuesValid(values) {
	// 	return values.every((el) => !isNaN(el)) && values[0] <= values[1]
	// }
	
	// function setResultContainerText(text) {
	// 	const resultContainer = document.querySelector(".result-container")
	// 	resultContainer.innerText = text
	// }
	//=============== Не мій варіант2 ===============
	
	//=============== Не мій варіант3 ===============

	//=============== Мій варіант1 ==================

	function createIterator(min, max) {
		let current = min - 1;
		
		// Замикання, яке повертає наступне значення
		return function () {
			current = current < max ? current + 1 : min;
			return current;
		};
	}

	// Створюємо ітератор для номерів місяців (від 1 до 12)
	const monthIterator = createIterator(1, 12);

	// Тестування: виводимо послідовно 15 значень
	for (let i = 0; i < 15; i++) {
		console.log(`Місяць: ${monthIterator()}`);
	}
}