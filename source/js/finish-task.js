/* eslint-disable no-restricted-syntax */
(function () {
	const findCurrentInput = (currentParent) => {
		const input = currentParent.querySelector('.item__input');
		input.style.textDecoration = 'line-through';
		input.setAttribute('disabled', 'true');
	};

	const finishedTask = () => {
		const taskFinishButtons = document.getElementsByClassName('item__finish');
		for (const taskFinishButton of taskFinishButtons) {
			taskFinishButton.addEventListener('click', () => {
				const currentParent = taskFinishButton.parentElement;
				findCurrentInput(currentParent);
			});
		}
	};

	finishedTask();
	window.finished = {
		finishedTask,
	};
}());
