"use strict"

// Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.

if (confirm("Почати тестування?")) {
	
	//=============== Не мій варіант1 ===============

	// function onBtnClick() {
	// 	const boysArray = ["Petro", "Ivan", "Daniel"]
	// 	const girlsArray = ["Nadia", "Alina", "Natalia", "Oksana"]
	// 	const couples = getAllCouples(boysArray, girlsArray)
	// 	displayResult(boysArray, girlsArray, couples)
	// }
	 
	// // Варіант 1

	// function getAllCouples(boysArray, girlsArray) {
	// 	const resArr = []
	// 	for (const boy of boysArray) {
	// 		for (const girl of girlsArray) {
	// 			resArr.push([boy, girl])
	// 		}
	// 	}
	// 	return resArr
	// }

	// // Варіант 2

	// // function getAllCouples(boysArray, girlsArray) {
	// // 	const resArr = []
	// //    function couples(boysArray, boyIndex, girlsArray) {
	// //    	if (boyIndex < boysArray.length) {
	// //    		for (const girl of girlsArray) {
	// //    			resArr.push([boysArray[boyIndex], girl])
	// //    		}
	// //    		couples(boysArray, boyIndex + 1, girlsArray)
	// //    	}
	// //    }
	// //    couples(boysArray, 0, girlsArray)
	// //    return resArr
	// // }
	
	// // Варіант 3
	
	// // function getAllCouples(boysArray, girlsArray) {
	// // 	const resArray = []
	// // 	function couples(boysArray, boyIndex, girlsArray, girlIndex) {
	// //    	if (boyIndex < boysArray.length) {
	// //       	if (girlIndex < girlsArray.length) {
	// //          	resArray.push([boysArray[boyIndex], girlsArray[girlIndex]])
	// //          	couples(boysArray, boyIndex, girlsArray, girlIndex + 1)
	// //        	} else couples(boysArray, boyIndex + 1, girlsArray, 0)
	// //      	}
	// //    }
	// //    couples(boysArray, 0, girlsArray, 0)
	// //    return resArray
	// // }
	
	// function displayResult(boys, girls, result) {
	// 	const container = document.querySelector(".result-container")
	// 	container.innerText = `Масив хлопців: ${boys}\nМасив дівчат: ${girls}\n${result.join(
	// 		" | "
	// 	)}`
	// }
	//=============== Не мій варіант2 ===============
	
	//=============== Не мій варіант3 ===============

	//=============== Мій варіант1 ==================

	function generateDancePairs(boys, girls) {
		let pairs = [];
  
		// Перебираємо кожного хлопця
		for (let boy of boys) {
			// Перебираємо кожну дівчину для цього хлопця
			for (let girl of girls) {
				pairs.push(`${boy} і ${girl}`);
			}
		}
		return pairs;
  	}
  
	// Масив хлопців і дівчат
	const boys = ["Олег", "Іван", "Петро"];
	const girls = ["Олена", "Марія", "Анна"];

	// Генеруємо всі можливі пари
	const allPairs = generateDancePairs(boys, girls);
	
	// Виводимо всі пари
	allPairs.forEach((pair, index) => {
		console.log(`Пара ${index + 1}: ${pair}`);
	});
}