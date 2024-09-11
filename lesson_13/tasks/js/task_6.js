"use strict"
/*
	З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Перекладач». Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.
*/

if (confirm("Почати тестування?")) {
	
	//=============== Не мій варіант1 ===============

	// function onBtnClick(translatorFunc, correctLettersCounterFunc) {
	// 	const userLetter = document.querySelector("input").value.toLowerCase()
	// 	if (!userLetter.length && userLetter.length > 1) {
	// 		setResultContainerText("Введіть 1 букву")
	// 		return
	// 	}
	// 	const letterOrWord = translatorFunc()
	// 	console.log(letterOrWord)
	// 	if (letterOrWord.length === 1) {
	// 		if (letterOrWord === userLetter) correctLettersCounterFunc()
	// 		setResultContainerText("Буква зарахована, можете вводити наступну")
	// 	} else
	// 	setResultContainerText(
	// 		`Гра закінчилась, загадане слово було ${letterOrWord}. Вгадана кількість букв: ${
	// 		correctLettersCounterFunc() - 1
	// 		}`
	// 	)
	// }
	// window.onload = () => {
	// 	const button = document.querySelector("button")
	// 	button.onclick = onBtnClick.bind(null, translator("javascript"), counter())
	// }
	// function counter() {
	// 	let correctLetters = 0
	// 	function increment() {
	// 		return ++correctLetters
	// 	}
	// 	return increment
	// }
	// function translator(word) {
	// 	let currentIndex = -1
	// 	function letter() {
	// 		if (++currentIndex >= word.length) return word
	// 		return word[currentIndex]
	// 	}
	// 	return letter
	// }
	// function setResultContainerText(text) {
	// 	const resultContainer = document.querySelector(".result-container")
	// 	resultContainer.innerText = text
	// }
	
	//=============== Не мій варіант2 ===============
	
	//=============== Не мій варіант3 ===============

	//=============== Мій варіант1 ==================
	
	function wordIterator(word) {
		let index = 0;
		return function() {
			return index < word.length ? word[index++] : null;
		};
	}

	function translatorGame(word, description) {
		let iterator = wordIterator(word);
		let guessedLetters = 0;

		alert(description); 

		for (let i = 0; i < word.length; i++) {
			let currentLetter = iterator();  // Отримуємо поточну букву
			let userInput = prompt(`Введіть переклад для букви: ${currentLetter}`);

			if (userInput && userInput.toLowerCase() === currentLetter.toLowerCase()) {
				guessedLetters++;
				alert("Правильно!");
			} else {
				alert(`Неправильно! Очікувалось: ${currentLetter}`);
			}
		}

		alert(`Гра завершена! Ви вгадали ${guessedLetters} з ${word.length} букв.`);
	}

	translatorGame("apple", "Це фрукт, який люблять їсти на обід.");
}