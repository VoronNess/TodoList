(function () {
	const removeTask = () => {
		const taskDeleteButtons = document.querySelectorAll('.item__delete');
		// eslint-disable-next-line no-restricted-syntax
		for (const taskDeleteButton of taskDeleteButtons) {
			taskDeleteButton.addEventListener('click', () => {
				taskDeleteButton.parentElement.remove();
			});
		}
	};
	removeTask();

	window.remove = {
		removeTask,
	};
}());
