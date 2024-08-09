"use strict"

// Відобразити трикутник за допомогою символів «о»
// oooooooooooo
// ooooooooooo
// oooooooooo
// ooooooooo
// oooooooo

const linesItems = 5

document.write(`<div class="block">`)
	for (let itemsIndex = linesItems; itemsIndex >= 1; itemsIndex--) {
		let row = 'o'
		document.write(`<div>`)
			for (let itemIndex = 1; itemIndex <= itemsIndex + 4; itemIndex++) {
				document.write(`${row}`)
			}
		document.write(`</div>`)
	}
document.write(`</div>`)