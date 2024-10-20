"use strict"

/*
	Умова. Створити клас Client
*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
// Клас Client
class Client {
	constructor(id, name, balance) {
	  this.id = id;  // Ідентифікатор клієнта
	  this.name = name;  // ПІБ клієнта
	  this.balance = balance;  // Кількість грошей на рахунку
	}
 
	// Метод додавання грошей
	addMoney(amount) {
	  if (amount > 0) {
		 this.balance += amount;
		 console.log(`${amount} додано до рахунку.`);
	  } else {
		 console.log('Сума для додавання повинна бути більше 0.');
	  }
	}
 
	// Метод зняття грошей
	withdrawMoney(amount) {
	  if (amount > 0 && amount <= this.balance) {
		 this.balance -= amount;
		 console.log(`${amount} знято з рахунку.`);
	  } else {
		 console.log('Недостатньо коштів або неправильна сума.');
	  }
	}
 
	// Метод для виведення інформації про клієнта
	toString() {
	  return `ID: ${this.id}, ПІБ: ${this.name}, Баланс: ${this.balance}`;
	}
 }
 
 // Клас GoldenClient (наслідується від Client)
 class GoldenClient extends Client {
	constructor(id, name, balance, creditLimit, creditRate) {
	  super(id, name, balance);  // Виклик конструктора базового класу
	  this.creditLimit = creditLimit;  // Ліміт кредитних коштів
	  this.creditRate = creditRate;  // Відсоток за використання кредитних коштів
	  this.creditUsed = 0;  // Використані кредитні кошти
	}
 
	// Перевизначення методу зняття грошей з додаванням кредитного ліміту
	withdrawMoney(amount) {
	  if (amount > 0) {
		 if (amount <= this.balance) {
			this.balance -= amount;
			console.log(`${amount} знято з рахунку.`);
		 } else if (amount <= this.balance + this.creditLimit - this.creditUsed) {
			const creditNeeded = amount - this.balance;
			this.creditUsed += creditNeeded;
			this.balance = 0;
			console.log(`${amount} знято, з яких ${creditNeeded} з кредиту.`);
		 } else {
			console.log('Недостатньо коштів на рахунку або кредитному ліміті.');
		 }
	  } else {
		 console.log('Неправильна сума.');
	  }
	}
 
	// Метод для визначення пені за використання кредитних коштів
	calculatePenalty() {
	  const penalty = this.creditUsed * this.creditRate / 100;
	  return penalty;
	}
 
	// Перевизначений метод для виведення інформації про золотого клієнта
	toString() {
	  return `ID: ${this.id}, ПІБ: ${this.name}, Баланс: ${this.balance}, Кредитний ліміт: ${this.creditLimit}, Використано кредиту: ${this.creditUsed}`;
	}
 }
 
 // Приклад використання:
 let client1 = new Client(1, "Іван Іванов", 10000);
 console.log(client1.toString());
 client1.addMoney(5000);
 client1.withdrawMoney(3000);
 console.log(client1.toString());
 
 let goldenClient = new GoldenClient(2, "Петро Петренко", 5000, 10000, 5);
 console.log(goldenClient.toString());
 goldenClient.withdrawMoney(12000);
 console.log(goldenClient.toString());
 console.log("Пеня: " + goldenClient.calculatePenalty());
 
//=============== Мій варіант2 ==================