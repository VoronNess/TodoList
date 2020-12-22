(function () {
	const taskNumbers = document.getElementsByClassName('item__number');

	const setTaskNumber = () => {
		for (let i = 0; i < taskNumbers.length; i++) {
			taskNumbers[i].textContent = i + 1;
		}
	};
	window.number = {
		setTaskNumber,
	};
}());
