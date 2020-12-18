/* eslint-disable no-restricted-syntax */
(function () {
	const taskDoneButtons = document.getElementsByClassName('item-done');
	const inputs = document.getElementsByClassName('item-input');
	console.log(inputs);

	const findCurrentInput = (i) => {
		if (inputs[i].style.textDecoration === 'line-through') {
			inputs[i].style.textDecoration = 'none';
		} else {
			inputs[i].style.textDecoration = 'line-through';
		}
	};

	const finishedTask = () => {
		for (let i = 0; i < taskDoneButtons.length; i++) {
			taskDoneButtons[i].addEventListener('click', () => {
				findCurrentInput(i);
			});
		}
	};
	finishedTask();

	window.finished = {
		finishedTask,
	};
}());
