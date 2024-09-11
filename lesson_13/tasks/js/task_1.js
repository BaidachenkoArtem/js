"use strict"

// Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву.
// Наприклад, для масиву[1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].

if (confirm("Почати тестування?")) {
	
	//=============== Не мій варіант1 ===============
	// function onBtnClick() {
	// 	const array = [2, 5, 9]
	// 	const subsets = getAllSubsets(array)
		
	// 	const container = document.querySelector(".result-container")
	// 	subsets.forEach((el, i) => {
	// 		const div = document.createElement("div")
	// 		div.innerText = `${i + 1}. [${el.join(", ")}]`
	// 		container.append(div)
	// 	})
	// }

	// function getAllSubsets(array) {
	// 	const resultArray = []
		
	// 	function subset(array, step, currentSubset) {
	// 		if (step === array.length) {
	// 			resultArray.push([...currentSubset])
	// 		} else {
	// 			subset(array, step + 1, currentSubset)
	// 			currentSubset.push(array[step])
	// 			subset(array, step + 1, currentSubset)
	// 			currentSubset.pop()
	// 		}
	// 	}
	// 	subset(array, 0, [])
	// 	return resultArray
	// }

	//=============== Не мій варіант2 ===============

	//=============== Не мій варіант3 ===============

	//=============== Мій варіант1 ==================

	function generateSubsets(array) {
		let result = [];
  
		function backtrack(currentSubset, index) {
			result.push([...currentSubset]);
  
			for (let i = index; i < array.length; i++) {
				currentSubset.push(array[i]);
  				backtrack(currentSubset, i + 1);
  				currentSubset.pop();
			}
		}
  
		backtrack([], 0);
  
		return result;
	}
  
	const subsets = generateSubsets([5, 2, 1]);
	console.log(subsets);
  
}