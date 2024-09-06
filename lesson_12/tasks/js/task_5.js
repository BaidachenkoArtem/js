"use strict"

// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

if (confirm("Почати тестування?")) {
	
	let names = ["Anna", "Maria", "Olga", "Igor", "Peter", "John", "Svitlana", "Olena", "Nika"]

	document.write(`	
		<p>Оригінальний масив: ${names}</p>
	`)

	function insertionSort(arr) {
	
		for (let i = 1; i < arr.length; i++) {
			let key = arr[i]
			let j = i - 1
			
			while (j >= 0 && arr[j] > key) {
			  arr[j + 1] = arr[j]
			  j--
			}
			arr[j + 1] = key
		}
		return arr
	}

	function binarySearch(arr, searchElement, start, end) {
	
		if (start <= end) {
		const middle = Math.floor((start + end) / 2)
			if (arr[middle] === searchElement)
				return middle

			if (arr[middle] < searchElement)
				return binarySearch(arr, searchElement, middle + 1, end)

			if (arr[middle] > searchElement)
				return binarySearch(arr, searchElement, start, middle - 1)
		} else return -1; 
	}
  	
	insertionSort(names)

	let index = binarySearch(names, `Olga`, 0, names.length - 1)
	
	document.write(`	
	  <p>Відсортований масив: ${names}</p>
	  <p>Елемент має індекс: ${index}</p>
	`)
}