"use strict"

/*
	Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.
*/

const getTableButton = document.getElementById('getTable');
const getSumButton = document.getElementById('getSum');
const tableContainer = document.getElementById('table');
const gradesNumInput = document.getElementById('gradesNum');

function getTable() {
	const userChoice = parseFloat(document.getElementById('gradesNum').value);
	const field = document.querySelector('.field');
	
	// =====================================================
	if (userChoice > 0 && !field.querySelector('table')) {
		const table = document.createElement('table');
		field.append(table);
		 
		const tableBody = document.createElement('tbody');
		table.append(tableBody);

		// =====================================================
		for (let row = 0; row < userChoice; row++) {
			const tableRow = document.createElement('tr');
			const tableCol = document.createElement('td');
			const input = document.createElement('input');
			  
			input.classList.add('table__input');
			input.setAttribute('type', 'number');
			input.setAttribute('value', '0');
			  
			tableCol.append(input);
			tableRow.append(tableCol);
			tableBody.append(tableRow);
		}

		// =====================================================
		const button = document.createElement('button');
		button.classList.add('button', 'field__button');
		button.setAttribute('type', 'button');
		button.innerText = 'Get sum';
		field.append(button);

		// =====================================================
		const divResult = document.createElement('div');
		divResult.classList.add('field__item');
		 
		const title = document.createElement('span');
		title.innerText = 'Результат: ';
		divResult.append(title);
		 
		const result = document.createElement('span');
		result.classList.add('result');
		result.setAttribute('id', 'result');
		divResult.append(result);
		 
		field.append(divResult);

		// =====================================================
		const buttonRestart = document.createElement('button');
		buttonRestart.classList.add('button', 'field__button');
		buttonRestart.setAttribute('type', 'button');
		buttonRestart.innerText = 'Restart';
		field.append(buttonRestart);
		 
		button.onclick = getAverageValue;
		buttonRestart.onclick = resetTable;
	}
}

function getAverageValue() {
	const valuesList = document.querySelectorAll('.table__input');
	let totalSum = 0;

	valuesList.forEach((el) => {
		totalSum += parseFloat(el.value);
	});

	const result = totalSum / valuesList.length;
	const resField = document.getElementById('result');
	resField.innerText = result.toFixed(1);
}

function resetTable() {
	const field = document.querySelector('.field');
	
	const table = field.querySelector('table');
	if (table) {
		table.remove();
	}

	const buttons = field.querySelectorAll('button.field__button');
	buttons.forEach((btn) => {
		if (btn.innerText === 'Get sum' || btn.innerText === 'Restart') {
			btn.remove();
		}
	});
}

window.onload = function () {
	document.querySelector('.quantity').onclick = getTable;
}