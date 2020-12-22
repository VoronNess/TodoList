(function () {
	const removeTask = () => {
		const taskDeleteButtons = document.querySelectorAll('.item__delete');

		// eslint-disable-next-line no-restricted-syntax
		for (const taskDeleteButton of taskDeleteButtons) {
			taskDeleteButton.addEventListener('click', () => {
				const taskFinishButtons = document.getElementsByClassName('item__finish');

				window.finished.finishedTask(taskFinishButtons);
				taskDeleteButton.parentElement.remove();
				window.number.setTaskNumber();
			});
		}
	};
	removeTask();

	window.remove = {
		removeTask,
	};
}());
