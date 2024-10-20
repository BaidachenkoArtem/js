"use strict"

/*
	Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент
*/

document.getElementById('search-input').addEventListener('input', function() {
	let filter = this.value.toLowerCase();
	let listItems = document.querySelectorAll('#employee-list li');

	listItems.forEach(function(item) {
		let text = item.textContent.toLowerCase();
		if (text.includes(filter)) {
			item.style.display = '';
		} else {
			item.style.display = 'none';
		}
	});
});