(function () {
	const clearAllTasksButton = document.querySelector('.buttons__clear-all');
	const tasksList = document.querySelector('.tasks__list');

	const clearAllTasks = () => {
		clearAllTasksButton.addEventListener('click', () => {
			tasksList.innerHTML = '';
		});
	};
	clearAllTasks();
}());
