"use strict"

// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

const dayNumber = parseInt(prompt('Номер дня від 1 до 7'))
let day = "Робочий"
let days = "Вихідний"
let result = "Некоректне число"

function dayNumbers() {
	if (dayNumber>=1 && dayNumber<=5) {
		return day
	}
	else if (dayNumber>=5 && dayNumber<=7) {
		return days
	}
	else 
		return result
}
document.write(`День: ${dayNumbers()}`)