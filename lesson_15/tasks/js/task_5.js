"use strict"

// Розробити клас «Керівник танців»

if (confirm("Почати тестування?")) {
	
	class DanceManager {
		constructor(boys, girls) {
			this.boys = boys;   
			this.girls = girls; 
		}
  
		getRandomBoy() {
			const randomIndex = Math.floor(Math.random() * this.boys.length);
			return this.boys[randomIndex];
		}

		getRandomGirl() {
			const randomIndex = Math.floor(Math.random() * this.girls.length);
			return this.girls[randomIndex];
		}

		showDancePair() {
			const boy = this.getRandomBoy();
			const girl = this.getRandomGirl();
			console.log(`Пара для танцю: ${boy} і ${girl}`);
		}

		run() {
			this.intervalId = setInterval(() => {
				this.showDancePair();
			}, 5000);
		}

		stop() {
			clearInterval(this.intervalId);
			console.log('Генерація пар зупинена.');
		}
	}
  
	const boys = ['Іван', 'Олексій', 'Михайло', 'Дмитро'];
	const girls = ['Анна', 'Марія', 'Ольга', 'Тетяна'];

	const danceManager = new DanceManager(boys, girls);
	
	danceManager.run();
	
	// Зупинка генерації:
	// danceManager.stop();
}