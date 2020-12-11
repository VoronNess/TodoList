(function () {
	const helpNotice = document.querySelector('.help');
	const closeHelpButton = helpNotice.querySelector('.button-close');

	const closeHelp = () => {
		closeHelpButton.addEventListener('click', () => {
			helpNotice.style.display = 'none';
		});
	};
	closeHelp();
}());
