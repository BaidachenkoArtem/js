"use strict"

// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.

if (confirm("Почати тестування?")) {

	let names = ["Anna",  "Igor", "Olga", "Peter", "John", "Svitlana", "Olena", "Nika"]

	document.write(`	
		<p>Оригінальний масив: ${names}</p>
	`)

	function insertionSort(arr) {
		for (let i = 1; i < arr.length; i++) {
			let key = arr[i];
			let j = i - 1;
 
			while (j >= 0 && arr[j].length > key.length) {
				arr[j + 1] = arr[j];
				j = j - 1;
			}
			arr[j + 1] = key;
	  }
	  return arr;
	}

	function binarySearch(arr, start, end) {
		if (start <= end) {
			const middle = Math.floor((start + end) / 2);
 
			if (arr[middle].length === 5) return middle;
			if (arr[middle].length < 5) return binarySearch(arr, middle + 1, end);
			if (arr[middle].length > 5) return binarySearch(arr, start, middle - 1);
	 	} else {
			return -1;
	  	}
	}
  	
	insertionSort(names)

	let index = binarySearch(names, 0, names.length - 1);

	document.write(`	
	  <p>Відсортований масив: ${names}</p>
	  <p>Елемент має індекс: ${index}</p>
	`)
}