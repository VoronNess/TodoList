(function () {
	const tasksConteiner = document.querySelector('.controls-wrapper');
	const addTask = tasksConteiner.querySelector('.button__add');
	const taskTemplate = document.querySelector('#task')
		.content;

	const tasksList = document.querySelector('.tasks__list');
	const liveTasks = tasksList.children;

	const fillTaskElement = (element) => {
		const taskInput = element.querySelector('.item-input');
		const taskNumber = element.querySelector('.item-number');

		taskNumber.textContent = liveTasks.length + 1;
		taskInput.setAttribute('placeholder', 'невероятно важное дело');
	};

	const createTaskElement = () => {
		const newTaskWrapper = document.createElement('li');
		const taskElement = taskTemplate.cloneNode(true);

		newTaskWrapper.classList.add('tasks__item');
		newTaskWrapper.setAttribute('draggable', true);

		fillTaskElement(taskElement);
		newTaskWrapper.appendChild(taskElement);
		tasksList.appendChild(newTaskWrapper);

		window.finished.finishedTask();// чтобы на каждый новый добавленный элемент тоже действовало
		window.remove.removeTask();
	};

	addTask.addEventListener('click', (evt) => {
		if (evt) {
			createTaskElement();
		}
	});
}());
