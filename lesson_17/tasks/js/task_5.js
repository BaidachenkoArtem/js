"use strict"
/*
	Умова. 5. Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів  
	Приклад.
	testsList= [
		{firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
		{firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
	]
	Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля. 
	Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. Результати тестування додаються в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.
*/

if (confirm("Почати тестування?")) {

	class TestData {
		constructor(firstNum, secondNum, operation, userAnswer, correctAnswer) {
			this.firstNum = firstNum;
			this.secondNum = secondNum;
			this.operation = operation;
			this.userAnswer = userAnswer;
			this.correctAnswer = correctAnswer;
		}
	}

 	class History {
		constructor() {
			this.testsList = [];
		}
 
		addTest(testData) {
			this.testsList.push(testData);
		}

		showHistory() {
		  	this.testsList.forEach((test, index) => {
				console.log(
					`Тест ${index + 1}: ${test.firstNum} ${test.operation} ${test.secondNum} = ${test.userAnswer} (Правильна відповідь: ${test.correctAnswer})`
				);
		  	});
		}
 	}
 
	class MultChecker {
		generateTest() {
			const firstNum = Math.floor(Math.random() * 10) + 1;
			const secondNum = Math.floor(Math.random() * 10) + 1;
			const correctAnswer = firstNum * secondNum;
			
			const userAnswer = prompt(`Скільки буде ${firstNum} * ${secondNum}?`);
			return new TestData(firstNum, secondNum, '*', parseInt(userAnswer), correctAnswer);
		}
	}
 
	class AddChecker {
		generateTest() {
			const firstNum = Math.floor(Math.random() * 100) + 1;
			const secondNum = Math.floor(Math.random() * 100) + 1;
			const correctAnswer = firstNum + secondNum;
		
			const userAnswer = prompt(`Скільки буде ${firstNum} + ${secondNum}?`);
			return new TestData(firstNum, secondNum, '+', parseInt(userAnswer), correctAnswer);
		}
	}
 
	class TestManager {
		constructor(N, history) {
		  	if (TestManager.instance) {
				return TestManager.instance;
		  	}
	  
			this.N = N;
			this.history = history;
			this.multChecker = new MultChecker();
			this.addChecker = new AddChecker();
	  
			TestManager.instance = this;
		}
	
	
		startTests() {
		  let testsCompleted = 0;
		
		  	const testInterval = setInterval(() => {
			if (testsCompleted >= this.N) {
				clearInterval(testInterval);
				console.log('Тестування завершено. Вся історія:');
				this.history.showHistory();
				return;
			}
		 
			const isMultiplication = Math.random() < 0.5;
			let test;
		 
			if (isMultiplication) {
				test = this.multChecker.generateTest();
			} else {
				test = this.addChecker.generateTest();
			}
		 
				this.history.addTest(test);
				testsCompleted++;
		  	}, 1000); 
		}
	}
 
	const history = new History();
	const testManager = new TestManager(5, history);
	testManager.startTests();

	const testManager2 = new TestManager(10, history);
	console.log(testManager === testManager2); 

}