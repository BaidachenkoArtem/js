"use strict"

// Створити окремі функції, які переводять:
// 1)	Сантиметри у дюйми;
// 2)	Кілограми у фунти;
// 3)	Кілометри у милі.

// довжина в дюймах = довжина в сантиметрах / 2.54.

function getсentimetersInches() {
	let сentimeters = parseFloat(prompt('Довжина в сантиметрах'))
	let totalInches = сentimeters / 2.54
	return totalInches
}
document.write(`<div>Довжина в дюймах ${getсentimetersInches().toFixed(2)}</div>`)


function getKilogramsPounds() {
	let kilograms = parseFloat(prompt('Скільки кілограмів:'))
	let totalPounds = kilograms * 2.20462
	return totalPounds
}
document.write(`<div>Кілограми у фунтах ${getKilogramsPounds().toFixed(2)}</div>`)


function getKilometersMiles() {
	let kilometers = parseFloat(prompt('Скільки кілометрів:'))
	let totalMiles = kilometers * 0.62137
	return totalMiles
}
document.write(`<div>Кілометри у милі ${getKilometersMiles().toFixed(2)}</div>`)
