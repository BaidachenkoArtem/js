"use strict"

// Розробити калькулятор

function getPlus() {
	const firstNumber = parseFloat(document.getElementById('num1').value)
	const secondNumber = parseFloat(document.getElementById('num2').value)
	const plus = firstNumber + secondNumber
	document.getElementById('result').value = plus
}
function getMinus() {
	const firstNumber = parseFloat(document.getElementById('num1').value)
	const secondNumber = parseFloat(document.getElementById('num2').value)
	const minus = firstNumber - secondNumber
	document.getElementById('result').value = minus
}
function getProduct() {
	const firstNumber = parseFloat(document.getElementById('num1').value)
	const secondNumber = parseFloat(document.getElementById('num2').value)
	const product = firstNumber * secondNumber
	document.getElementById('result').value = product
}
function getDivision() {
	const firstNumber = parseFloat(document.getElementById('num1').value)
	const secondNumber = parseFloat(document.getElementById('num2').value)
	const division = firstNumber / secondNumber
	document.getElementById('result').value = division.toFixed(0)
}
window.onload = function () {
	document.querySelector('.plus').onclick = getPlus
	document.querySelector('.minus').onclick = getMinus
	document.querySelector('.product').onclick = getProduct
	document.querySelector('.division').onclick = getDivision
}
