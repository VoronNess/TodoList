(function () {
	const clearAllTasksButton = document.querySelector('.button__clear-all');
	const tasksList = document.querySelector('.tasks__list');

	const clearAllTasks = () => {
		clearAllTasksButton.addEventListener('click', () => {
			tasksList.innerHTML = '';
		});
	};
	clearAllTasks();
}());
