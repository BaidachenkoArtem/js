"use strict"

/*
	На формі вводять 7 числових значень (вік, зріст, вага, заробітна плата, стаж, номер відділу, порядковий номер). Додати подію обробки події click на форму і якщо клік на внутрішньому input, то автоматично замінювати значення його на 0. Використати делегування
*/

document.getElementById('dataForm').addEventListener('click', function(event) {
	if (event.target.tagName === 'INPUT') {
		event.target.value = 0;
	}
});