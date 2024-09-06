"use strict"

// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.

if (confirm("Почати тестування?")) {

	function getRandomNum(min = 1, max = 80) {
		return min + Math.floor(Math.random() * (max - min + 1))
	}
	function getNewArray(length = 30) {
		const array = new Array(length)	 
		for (let i = 0; i < length; i++) {
		  array[i] = getRandomNum()
		}
		return array
	}
	
	const arr = getNewArray()
	document.write(`${arr}`)

	function сocktailSort(arr) {

		let rightIndex = arr.length;
		let comparisons = 0
		let swaps = 0
		let swapped = true
		let start = 0
		let end = rightIndex - 1
		while (swapped) {
			swapped = false
  
			for (let i = start; i < end; i++) {
			  comparisons++
			  if (arr[i] > arr[i + 1]) {
					[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
					swaps++
					swapped = true
			  }
			}
  			end--
  			swapped = false
  
			for (let i = end; i > start; i--) {
			  comparisons++
			  if (arr[i - 1] > arr[i]) {
					[arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
					swaps++
					swapped = true
			  }
			}
  			start++
		}
  		return { comparisons, swaps }
	}

	let result = сocktailSort(arr)
	document.write(`
		<p>Кількість обмінів: ${result.swaps}</p>
		<p>Кількість порівнянь чисел: ${result.comparisons}</p>
	`)
}