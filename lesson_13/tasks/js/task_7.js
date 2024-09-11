"use strict"

// Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.

if (confirm("Почати тестування?")) {

	//=============== Не мій варіант1 ===============
	// window.onload = onMounted

	// function onMounted() {
	// 	setInterval(() => {
	//    	const firstDigit = generateNumber()
	//    	const secondDigit = generateNumber()
	//    	const userAns = parseInt(prompt(`${firstDigit}+${secondDigit}=`))
	//    	if (userAns === firstDigit + secondDigit) {
	//    	  alert("Правильно")
	//    	} else alert("Йди вчитися")
	//   	}, 10000)
	// }

	// function generateNumber(min = 0, max = 9) {
	// 	return min + Math.floor(Math.random() * (max - min + 1))
	// }

	//=============== Не мій варіант2 ===============
	
	//=============== Не мій варіант3 ===============

	//=============== Мій варіант1 ==================

	function generateRandomNumber() {
		return Math.floor(Math.random() * 10) + 1
	}
	
	function askAdditionQuestion() {
		const num1 = generateRandomNumber()
		const num2 = generateRandomNumber()
	
		const userAnswer = prompt(`Скільки буде ${num1} + ${num2}?`)
	
		if (parseInt(userAnswer) === num1 + num2) {
			alert('Правильно!')
		} else {
			alert(`Неправильно! Правильна відповідь: ${num1 + num2}`)
		}
	}
	
	setInterval(askAdditionQuestion, 10000)
}