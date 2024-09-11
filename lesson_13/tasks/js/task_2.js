"use strict"

// Дано масив імен спортсменів. Розробити програму для виведення усіх можливих результатів змагань (списки імен у відповідності до місць, які вони займуть).

if (confirm("Почати тестування?")) {

	//=============== Не мій варіант1 ===============
	// function onBtnClick() {
	// 	const array = ["Olga", "Petro", "Ivan", "Mykola"]
	// 	const permutations = getAllPermutations(array)
	 
	// 	const container = document.querySelector(".result-container")
	// 	permutations.forEach((el, i) => {
	// 		const div = document.createElement("div")
	// 		div.innerText = `${i + 1}. ${el.join(", ")}`
	// 		container.append(div)
	// 	})
	// }
	 
	// function getAllPermutations(array) {
	// 	const resultArray = []
	 
	// 	function permute(arrToPermute, step) {
	// 		if (step === arrToPermute.length) {
	// 			resultArray.push([...arrToPermute])
	// 		} else {
	// 			for (let i = step; i < arrToPermute.length; i++) {
	// 			swap(arrToPermute, step, i)
	// 			permute(arrToPermute, step + 1)
	// 			swap(arrToPermute, i, step)
	// 			}
	// 	  	}
	// 	}
	// 	permute(array, 0)
	// 	return resultArray
	// }
	// function swap(array, i, j) {
	// 	const temp = array[i]
	// 	array[i] = array[j]
	// 	array[j] = temp
	// }

	//=============== Не мій варіант2 ===============

	//=============== Не мій варіант3 ===============

	//=============== Мій варіант1 ==================
	
	function generatePermutations(arr) {
		let results = [];

		// Функція для рекурсивного створення перестановок
		function permute(subArr, m = []) {
			if (subArr.length === 0) {
				results.push(m);
			} else {
				for (let i = 0; i < subArr.length; i++) {
					let current = subArr.slice();
					let next = current.splice(i, 1);
					permute(current.slice(), m.concat(next));
				}
			}
		}
  		permute(arr);
		return results;
	}

	// Масив імен спортсменів
	const athletes = ["Іван", "Олександр", "Марія"];

	// Генерація всіх можливих результатів
	const results = generatePermutations(athletes);

	// Виведення результатів
	results.forEach((result, index) => {
		console.log(`Результат ${index + 1}: ${result.join(", ")}`);
	});
  
}