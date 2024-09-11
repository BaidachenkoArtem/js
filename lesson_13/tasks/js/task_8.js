"use strict"
/*
	При старті питаємо у користувача чи хоче він читати новини.
	Якщо так, то одразу переходимо до сайту Ukr.Net, якщо ні,
	то через 20 секунд самі переходимо на сайт ukr.net.
	Для цього через 20 секунд після відкриття треба виконати команду
*/

if (confirm("Почати тестування?")) {

	//=============== Не мій варіант1 ===============

	// window.onload = onMounted

	// function onMounted() {
	// 	if (confirm("Ви хочете читати новини?")) {
	//    	window.location.href = "https://www.ukr.net/"
	// 	} else
	//    setTimeout(() => {
	//      	window.location.href = "https://www.ukr.net/"
	//    }, 20000)
	// }

	//=============== Не мій варіант2 ===============
	
	//=============== Не мій варіант3 ===============

	//=============== Мій варіант1 ==================

	function questionUser() {
		if (confirm('Хочеш читати новини?')) {
			window.location.href = 'https://www.ukr.net/'
		} else {
			setTimeout(() => {
				window.location.href = 'https://www.ukr.net/'
			}, 20000)
		}
	}
	questionUser()
}