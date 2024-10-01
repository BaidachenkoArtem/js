"use strict"

/*
	Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.
*/	


if (confirm("Почати тестування?")) {

	//=============== Не мій варіант1 ===============
	
	class Reminder {
		constructor(message, intervalSeconds) {
	
		  	if (Reminder.instance) {
				return Reminder.instance;
		  	}

			this.message = message;
			this.intervalSeconds = intervalSeconds * 1000;
			this.counter = 0;
			this.timerId = null;
			
			Reminder.instance = this;
		}
	
		startReminder() {
			if (this.timerId) {
				console.log("Нагадувач вже запущений!");
				return;
			}
	 
		  	this.timerId = setInterval(() => {
				this.counter++;
				console.log(`Нагадування #${this.counter}: ${this.message}`);
		  	}, this.intervalSeconds);
		}
	 
		stopReminder() {
		  	if (this.timerId) {
				clearInterval(this.timerId);
				this.timerId = null;
				console.log("Нагадувач зупинено.");
		  	} else {
				console.log("Нагадувач не запущений.");
		  	}
		}

		changeMessage(newMessage) {
			this.message = newMessage;
			console.log(`Повідомлення змінено на: ${this.message}`);
		}
	}

	const reminder1 = new Reminder("Час зробити зарядку!", 5);
	reminder1.startReminder();
	
	setTimeout(() => {
		reminder1.changeMessage("Час випити води!");
	}, 15000);
	
	setTimeout(() => {
		reminder1.stopReminder();
	}, 30000);
	
	const reminder2 = new Reminder("Новий нагадувач!", 3);
	console.log(reminder1 === reminder2);
	 
}