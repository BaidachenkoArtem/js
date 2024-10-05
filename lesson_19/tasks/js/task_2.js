"use strict"

/*
	Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)
*/

const inputs = document.querySelectorAll('.inputs input');

inputs.forEach((input, index) => {
	input.addEventListener('input', () => {
		const currentValue = parseInt(input.value);

		if (!isNaN(currentValue)) {
			for (let i = index - 1; i >= 0; i--) {
				inputs[i].value = currentValue - (index - i);
			}
			for (let i = index + 1; i < inputs.length; i++) {
				inputs[i].value = currentValue + (i - index);
			}
		}
	});
});
