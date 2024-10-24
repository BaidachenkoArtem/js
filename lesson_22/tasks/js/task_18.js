"use strict"

/*
	Користувач може змінювати колір фону, що вибирає користувач з використанням
	<input type="color">.
	Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.
*/

document.addEventListener('DOMContentLoaded', () => {
	const colorPicker = document.getElementById('colorPicker')
	const counterDisplay = document.getElementById('counter')
	let changeCount = 0

	const savedColor = localStorage.getItem('bgColor')
	const savedCount = localStorage.getItem('changeCount')

	if (savedColor) {
		document.body.style.backgroundColor = savedColor
		colorPicker.value = savedColor
	}

	if (savedCount) {
		changeCount = parseInt(savedCount)
		counterDisplay.innerHTML = `Кількість змін: ${changeCount}`
	}

	colorPicker.addEventListener('input', (event) => {
		const newColor = event.target.value
		document.body.style.backgroundColor = newColor

		localStorage.setItem('bgColor', newColor)

		changeCount++
		localStorage.setItem('changeCount', changeCount)

		counterDisplay.innerHTML = `Кількість змін: ${changeCount}`
	})
})
