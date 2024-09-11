"use strict"

// Виведіть всі можливі наступні комбінації ходів користувачів у грі “Хрестики-нулики”, починаючи з деякої заданої ситуації
// (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято,
// і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок(де пробіли).
// Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.

if (confirm("Почати тестування?")) {

	//=============== Не мій варіант1 ===============
	// function onBtnClick() {
	// 	const ticTac = [
	// 		["X", "O", " "],
	// 		[" ", "X", " "],
	// 		["O", " ", "O"],
	// 	]
	// 	const emptyCells = getEmptyCells(ticTac)
	 
	// 	const allVariantsArray = getAllVariants(ticTac, emptyCells, 0, [])
	// 	const container = document.querySelector(".result-container")
	// 	for (const variant of allVariantsArray) {
	// 		container.append(generateTable(variant))
	// 	}
	//  }
	 
	// function generateTable(array) {
	// 	const wrapper = document.createElement("div")
	// 	const table = document.createElement("table")
	// 	wrapper.setAttribute("class", "col-2")
	// 	for (let i = 0; i < array.length; i++) {
	// 	  	const row = document.createElement("tr")
	// 	  	for (let j = 0; j < array[i].length; j++) {
	// 			const cell = document.createElement("td")
	// 			cell.innerText = array[i][j]
	// 			row.append(cell)
	// 		}
	// 	  	table.append(row)
	// 	  	wrapper.append(table)
	// 	}
	// 	return wrapper
	// }
	// function getEmptyCells(array) {
	// 	const emptyCells = []
	// 	for (let i = 0; i < array.length; i++) {
	// 		for (let j = 0; j < array[i].length; j++) {
	// 			if (array[i][j] === " ") emptyCells.push({ x: i, y: j })
	// 		}
	// 	}
	// 	return emptyCells
	// }
	// function getAllVariants(mainArray, emptyCells, step, resArray) {
	// 	if (step < emptyCells.length) {
	// 		const { x, y } = emptyCells[step]
	// 		mainArray[x][y] = "X"
	// 		getAllVariants(mainArray, emptyCells, step + 1, resArray)
	// 		mainArray[x][y] = "O"
	// 		getAllVariants(mainArray, emptyCells, step + 1, resArray)
	// 		mainArray[x][y] = " "
	// 	} else {
	// 	  resArray.push(JSON.parse(JSON.stringify(mainArray)))
	// 	}
	// 	return resArray
	// }

	//=============== Не мій варіант2 ===============
	
	//=============== Не мій варіант3 ===============

	//=============== Мій варіант1 ==================
	
	function generateMoves(board, currentPlayer) {
		const moves = [];
  
		// Перевіряємо, чи є порожні клітинки
		if (!board.some(row => row.includes(' '))) {
			return [board];
		}
		
		// Шукаємо всі можливі порожні клітинки для поточного ходу
		for (let row = 0; row < board.length; row++) {
			for (let col = 0; col < board[row].length; col++) {
			  	if (board[row][col] === ' ') {
					// Копіюємо поточну дошку
					let newBoard = board.map(row => row.slice());
  					// Встановлюємо хід поточного гравця
					newBoard[row][col] = currentPlayer;
  					// Генеруємо всі можливі ходи після цього ходу
					let nextMoves = generateMoves(newBoard, currentPlayer === 'X' ? 'O' : 'X');
					
					// Додаємо кожен наступний хід до списку можливих варіантів
					nextMoves.forEach(move => moves.push(move));
			  	}
			}
		}
  
		return moves;
	}

	// Функція для друку дошки
	function printBoard(board) {
		board.forEach(row => console.log(row.join(' | ')));
		console.log('---------');
	}

	// Початкова ситуація на дошці
	let initialBoard = [
		['X', 'O', ' '],
		[' ', 'X', ' '],
		[' ', ' ', 'O']
	];

	// Генерація всіх можливих ходів, починаючи з ходу гравця 'X'
	const allMoves = generateMoves(initialBoard, 'X');

	// Виведення всіх можливих варіантів
	allMoves.forEach((move, index) => {
		console.log(`Комбінація ходу ${index + 1}:`);
		printBoard(move);
	});
}