"use strict"

// Відобразити трикутник за допомогою символів «о»

const linesItems = 7

document.write(`<div class="block">`)
	for (let itemsIndex = 1; itemsIndex <= linesItems; itemsIndex++) {
		let row = 'o'
		document.write(`<div style="text-align: center;">`)
			for (let itemIndex = 1; itemIndex <= itemsIndex; itemIndex++) {
				document.write(`${row}`)
			}
		document.write(`</div>`)
	}
document.write(`</div>`)