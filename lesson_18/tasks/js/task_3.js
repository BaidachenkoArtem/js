"use strict"

// Користувач задає рік народження. Визначити кількість років користувача.

function getAge() {
	const currentYear = new Date().getFullYear()
	const userYearOfBirth = parseFloat(document.getElementById('years').value)
	if (userYearOfBirth > 0 && userYearOfBirth < currentYear) {
		const age = currentYear - userYearOfBirth
		document.getElementById('result').value = age
	}
}

window.onload = function () {
	document.getElementById('years').onchange = getAge
}