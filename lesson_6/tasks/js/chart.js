"use strict"

// Діаграма горизонтальна
/*
	<div class="block">
		<div class="block__item" style="width: 80%;">80</div>
		<div class="block__item" style="width: 30%;">30</div>
		<div class="block__item" style="width: 15%;">15</div>
		<div class="block__item" style="width: 40%;">40</div>
	</div>
*/

document.write(`<div class="block1">`)
	for (let itemIndex = 0; itemIndex < 10; itemIndex++) {
		const randNum = 1 + Math.floor(Math.random() * 100)
		document.write(`<div class="block1__item" style="width:${randNum}%;">${randNum}</div>`)
	}
document.write(`</div>`)

// Діаграма вертикальна
document.write(`<div class="block2" style="display:flex; gap: 40px; align-items: flex-end;">`)
	for (let itemIndex = 0; itemIndex < 10; itemIndex++) {
		const randNum = 1 + Math.floor(Math.random() * 100)
		document.write(`<div class="block2__item" style="height:${randNum}%;">${randNum}</div>`)
	}
document.write(`</div>`)
