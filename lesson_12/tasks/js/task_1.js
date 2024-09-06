"use strict"

// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою

if (confirm("Почати тестування?")) {
	
	function getRandNum(min = 1, max = 80) {
		return min + Math.floor(Math.random() * (max - min + 1))
	}
	function getNewArray(length = 30) {
		const array = new Array(length)	 
		for (let i = 0; i < length; i++) {
		  array[i] = getRandNum()
		}
		return array
	}	
	const arr = getNewArray()
	document.write(`${arr}`)

	function bubbleSort(arr) {
		let rightIndex = arr.length - 1
		let comparisons = 0
		let exchange = 0
		let changed
		do {
			changed = false
			for (let i = 1; i <= rightIndex; i++) {
				comparisons++
					if (arr[i - 1] > arr[i]) {
						exchange++
					const tmp = arr[i]
					arr[i] = arr[i - 1]
					arr[i - 1] = tmp
					changed = true
				}
			}
			rightIndex--
		} while (changed)
		return { comparisons, exchange }
	}

	let result = bubbleSort(arr)
	document.write(`
		<p>Кількість обмінів: ${result.exchange}</p>
		<p>Кількість порівнянь чисел: ${result.comparisons}</p>
	`)
}