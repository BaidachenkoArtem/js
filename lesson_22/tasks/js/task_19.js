"use strict"

/*
	Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). Якщо користувач натискає на «Ок», то видаляти цю задачу.
*/

function getTasks() {
	const tasks = localStorage.getItem('tasks')
	return tasks ? JSON.parse(tasks) : []
}

function saveTasks(tasks) {
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

function addTask(task) {
	const tasks = getTasks()
	tasks.push(task)
	saveTasks(tasks)
	renderTasks()
}

function deleteTask(task) {
	let tasks = getTasks()
	tasks = tasks.filter(t => t !== task)
	saveTasks(tasks)
	renderTasks()
}

function renderTasks() {
	const taskList = document.getElementById('taskList')
	const tasks = getTasks()
	
	taskList.innerHTML = ''
	
	tasks.forEach(task => {
		const li = document.createElement('li')
		li.textContent = task
		taskList.appendChild(li)
	});
}

function randomTaskReminder() {
	const tasks = getTasks()
	if (tasks.length > 0) {
		const randomIndex = Math.floor(Math.random() * tasks.length)
		const randomTask = tasks[randomIndex]
		 
		if (confirm(`Ви хочете виконати цю задачу: "${randomTask}"?`)) {
			deleteTask(randomTask)
		}
	}
}

document.getElementById('addTaskBtn').addEventListener('click', function() {
	const taskInput = document.getElementById('taskInput')
	const task = taskInput.value.trim()
	
	if (task) {
		addTask(task)
		taskInput.value = ''
	}
})

renderTasks()
setInterval(randomTaskReminder, 30000)