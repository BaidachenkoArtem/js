"use strict"

/*
	Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями.
	Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років.
	Введення та виведення дати реалізувати за допомогою методу toString.
*/	

if (confirm("Почати тестування?")) {	
	
	class TDate {
		constructor(day, month, year) {
			this.day = day;
			this.month = month;
			this.year = year;
		}
  
		static isValidDate(day, month, year) {
			const date = new Date(year, month - 1, day);
			return (
				date.getFullYear() === year &&
				date.getMonth() === month - 1 &&
				date.getDate() === day
			);
		}
  
		addDays(days) {
			const date = new Date(this.year, this.month - 1, this.day);
			date.setDate(date.getDate() + days);
			this.day = date.getDate();
			this.month = date.getMonth() + 1;
			this.year = date.getFullYear();
		}
  
		addMonths(months) {
			const date = new Date(this.year, this.month - 1, this.day);
			date.setMonth(date.getMonth() + months);
			this.day = date.getDate();
			this.month = date.getMonth() + 1;
			this.year = date.getFullYear();
		}
 
		addYears(years) {
			const date = new Date(this.year, this.month - 1, this.day);
			date.setFullYear(date.getFullYear() + years);
			this.day = date.getDate();
			this.month = date.getMonth() + 1;
			this.year = date.getFullYear();
		}
  
		subtractDays(days) {
			this.addDays(-days);
		}
  
		subtractMonths(months) {
			this.addMonths(-months);
		}
  
		subtractYears(years) {
			this.addYears(-years);
		}
  
		toString() {
			const day = String(this.day).padStart(2, '0');
			const month = String(this.month).padStart(2, '0');
			return `${day}.${month}.${this.year}`;
		}
  }
  

	const date = new TDate(28, 2, 2020); 
  
	console.log(date.toString()); 
  
	date.addDays(3);
	console.log(date.toString()); 
  
	date.addMonths(1);
	console.log(date.toString());
  
	date.addYears(2);
	console.log(date.toString()); 
  
	date.subtractDays(5);
	console.log(date.toString());
  
}