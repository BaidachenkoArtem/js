"use strict"

// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.

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

	function inclusionsSort(arr) {
		let comparisons = 0
		let swaps = 0
		
		for (let i = 1; i < arr.length; i++) {
			let key = arr[i]
			let j = i - 1
 
			while (j >= 0 && arr[j] > key) {
				comparisons++
				arr[j + 1] = arr[j] 
				swaps++
				j--
			}
			if (j >= 0) comparisons++ 
			arr[j + 1] = key 
	  	}
		return { sortedArray: arr, comparisons, swaps }
	}

	let result = inclusionsSort(arr)
	document.write(`
		<p>Відсортований масив: ${result.sortedArray}</p>
		<p>Кількість обмінів: ${result.swaps}</p>
		<p>Кількість порівнянь чисел: ${result.comparisons}</p>
	`)
}