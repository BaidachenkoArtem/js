"use strict"

// Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком. Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран (стрілки не потрібні).

if (confirm("Почати тестування?")) {
	
	function getRandNum(min = 1, max = 80) {
		return min + Math.floor(Math.random() * (max - min + 1))
	}
	// ======= BubbleSort ==============
	function bubbleSort(arr) {
		let changed
		do {
		  changed = false
		  for (let i = 1; i < arr.length; i++) {
			 if (arr[i - 1] > arr[i]) {
				let temp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = temp
				changed = true
				console.log(arr)
			 }
		  }
		} while (changed)
		return arr
	}
	// ======= CoctailSort ==============
	function cocktailSort(arr) {
		let leftIndex = 0
		let rightIndex = arr.length - 1
		while (leftIndex < rightIndex) {
		  let changed = false
		  for (let i = leftIndex; i < rightIndex; i++) {
			 if (arr[i] > arr[i + 1]) {
				let temp = arr[i + 1]
				arr[i + 1] = arr[i]
				arr[i] = temp
				changed = true
				console.log(arr)
			 }
		  }
		  rightIndex--
		  if (changed === false) break
		  changed = false
		  for (let i = rightIndex; i > leftIndex; i--) {
			 if (arr[i] < arr[i - 1]) {
				let temp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = temp
				changed = true
				console.log(arr)
			 }
		  }
		  leftIndex++
		  if (changed === false) break
		}
		return arr
	}
	// ======= InsertionSort ==============
	function insertionSort(arr) {
		for (let k = 1; k < arr.length; k++) {
		  const currentElement = arr[k]
		  let i = k - 1
		  while (i >= 0 && arr[i] > currentElement) {
			 arr[i + 1] = arr[i]
			 i--
		  }
		  arr[i + 1] = currentElement
		  console.log(arr)
		}
		return arr
	}
	// ======= SelectionSort ==============
	function selectionSort(arr) {
		const prevLastIndex = arr.length - 2
		for (let i = 0; i < prevLastIndex; i++) {
		  let minIndex = i
		  for (let j = i + 1; j < arr.length; j++) {
			 if (arr[j] < arr[minIndex]) {
				minIndex = j
			 }
		  }
		  if (i !== minIndex) {
			 let temp = arr[i]
			 arr[i] = arr[minIndex]
			 arr[minIndex] = temp
			 console.log(arr)
		  }
		}
		return arr
	}

	function getNewArray(arr) {
		return new Array(arr)
		  .fill(0)
		  .map((el) => (el = getRandNum()))
	}
	// =====================================

	const testArr = getNewArray(5)
	console.log(testArr)

  	const testArr1 = JSON.parse(JSON.stringify(testArr))
	console.log(`---BubbleSort---`)
	console.log(bubbleSort(testArr1))

  	const testArr2 = JSON.parse(JSON.stringify(testArr))
	console.log(`---CoctailSort---`)
	console.log(cocktailSort(testArr2))

  	const testArr3 = JSON.parse(JSON.stringify(testArr))
	console.log(`---InsertionSort---`)
	console.log(insertionSort(testArr3))

  	const testArr4 = JSON.parse(JSON.stringify(testArr))
	console.log(`---SelectionSort---`)
	console.log(selectionSort(testArr4))
}