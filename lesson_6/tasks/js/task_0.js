"use strict"

// Вивести на екран
// A B C D E
// B C D E F
// C D E F G
// D E F G H
// E F G H I
/*
<div class="block">
	<div class="items">
		<div class="item">A</div>
		<div class="item">B</div>
		<div class="item">C</div>
		<div class="item">D</div>
		<div class="item">E</div>
	</div>
</div>
*/

const alphabet = 'ABCDEFGHI';

for (let i = 0; i < 5; i++) {
   let line= '';
   for (let j = 0; j < 5; j++) {
     line += alphabet[i + j] + ' ';
   }
   document.write(`<div>${line}</div>`);
}