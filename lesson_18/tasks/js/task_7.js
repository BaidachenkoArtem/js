"use strict"

/*
	Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список),
	харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons).
	Ціни визначте самі. Підрахувати загальну вартість.
*/
	
function calculateTotal() {
	let total = 0;

	// Транспорт
	let transport1 = document.getElementById('transport1').value;
	let transport2 = document.getElementById('transport2').value;
	let transport3 = document.getElementById('transport3').value;

	const transportPrices = {
		'auto': 500,
		'bus': 300,
		'plane': 1000
	};

	total += transportPrices[transport1];
	total += transportPrices[transport2];
	total += transportPrices[transport3];

	// Харчування
	let food1 = (document.getElementById('food1_breakfast').checked ? parseInt(document.getElementById('food1_breakfast').value) : 0) +
					(document.getElementById('food1_lunch').checked ? parseInt(document.getElementById('food1_lunch').value) : 0) +
					(document.getElementById('food1_dinner').checked ? parseInt(document.getElementById('food1_dinner').value) : 0);
	
	let food2 = (document.getElementById('food2_breakfast').checked ? parseInt(document.getElementById('food2_breakfast').value) : 0) +
					(document.getElementById('food2_lunch').checked ? parseInt(document.getElementById('food2_lunch').value) : 0) +
					(document.getElementById('food2_dinner').checked ? parseInt(document.getElementById('food2_dinner').value) : 0);
	
	let food3 = (document.getElementById('food3_breakfast').checked ? parseInt(document.getElementById('food3_breakfast').value) : 0) +
					(document.getElementById('food3_lunch').checked ? parseInt(document.getElementById('food3_lunch').value) : 0) +
					(document.getElementById('food3_dinner').checked ? parseInt(document.getElementById('food3_dinner').value) : 0);
	
	total += food1 + food2 + food3;

	// Гіди
	let guide1 = document.querySelector('input[name="guide1"]:checked').value;
	let guide2 = document.querySelector('input[name="guide2"]:checked').value;
	let guide3 = document.querySelector('input[name="guide3"]:checked').value;

	total += parseInt(guide1) + parseInt(guide2) + parseInt(guide3);

	// Виведення загальної вартості
	document.getElementById('totalCost').innerText = `Загальна вартість: ${total} грн`;
}