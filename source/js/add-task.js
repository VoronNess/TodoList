(function () {
	const tasksConteiner = document.querySelector('.tasks__controls-wrapper');
	const addTask = tasksConteiner.querySelector('.button__add');
	const taskTemplate = document.querySelector('#task')
		.content;

	const tasksList = document.querySelector('.tasks__list');
	const liveTasks = tasksList.children;

	const fillTaskElement = (element) => {
		const taskInput = element.querySelector('.item__input');
		const taskNumber = element.querySelector('.item__number');
		const taskFinish = element.querySelector('.item__finish');

		taskNumber.textContent = liveTasks.length + 1;
		taskInput.id = liveTasks.length + 1;
		taskFinish.htmlFor = taskInput.id;
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

		// чтобы на каждый новый добавленный элемент тоже действовало
		window.remove.removeTask();
		const taskFinishButtons = document.getElementsByClassName('item__finish');
		window.finished.finishedTask(taskFinishButtons);
	};

	addTask.addEventListener('click', (evt) => {
		if (evt) {
			createTaskElement();
		}
	});
}());
