const tasksListElement = document.querySelector('.tasks__list');
const taskElements = tasksListElement.querySelectorAll('.tasks__item');

for (let i = 0; i < taskElements.length; i++) {
	taskElements[i].draggable = true;
}
const getNextElement = (cursorPosition, currentElement) => {
	const currentElementCoord = currentElement.getBoundingClientRect();
	const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

	const nextElement = (cursorPosition < currentElementCenter)
		? currentElement // вернет текущий
		: currentElement.nextElementSibling;// вернет следующий элемент после текущего

	return nextElement;
};

tasksListElement.addEventListener('dragstart', (evt) => {
	evt.target.classList.add('selected');
});

tasksListElement.addEventListener('dragend', (evt) => {
	evt.target.classList.remove('selected');
});

tasksListElement.addEventListener('dragover', (evt) => {
	evt.preventDefault();

	const activeElement = tasksListElement.querySelector('.selected');
	const currentElement = evt.target;
	const isMoveable = activeElement !== currentElement
    && currentElement.classList.contains('tasks__item');

	if (!isMoveable) {
		return;
	}

	const nextElement = getNextElement(evt.clientY, currentElement);

	if (nextElement && activeElement === nextElement.previousElementSibling || activeElement === nextElement) {
		return;
	}

	tasksListElement.insertBefore(activeElement, nextElement);
});

// удаляем пункты
const task = document.querySelector('.tasks__item');
const deleteTask = task.querySelector('.item__delete');

deleteTask.addEventListener('click', (evt) => {
	if (evt) {
		task.remove();
	}
});

// добавляем элемент списка
const tasksConteiner = document.querySelector('.tasks__wrapper');
const addTask = tasksConteiner.querySelector('.buttons__add');

addTask.addEventListener('click', (evt) => {
	if (evt) {
		const newTaskWrapper = document.createElement('li');
		const cardElement = cardTemplate.cloneNode(true);
		newTaskWrapper.classList.add('tasks__item');
	}
});
