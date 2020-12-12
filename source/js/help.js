/* eslint-disable no-restricted-syntax */
(function () {
	const slidesList = document.querySelector('.slider__list');
	const liveSlides = slidesList.children;
	const dotsList = document.querySelector('.slider__controls--dots');
	const liveDots = dotsList.children;

	let currentSlide = 0;

	const buttonPrevious = document.querySelector('.slider__controls-arrows--previous');
	const buttonNext = document.querySelector('.slider__controls-arrows--next');

	const showCurrentSlide = (i) => {
		for (const slide of liveSlides) {
			slide.classList.remove('slide__current');
		}
		liveSlides[i].classList.add('slide__current');
	};

	const showCurrentDot = (i) => {
		for (const dot of liveDots) {
			dot.classList.remove('dot__current');
		}
		liveDots[i].classList.add('dot__current');
	};

	const showPreviousSlide = () => {
		if (currentSlide - 1 === -1) {
			currentSlide = liveSlides.length - 1;
			showCurrentSlide(currentSlide);
			showCurrentDot(currentSlide);
		} else {
			currentSlide--;
			showCurrentSlide(currentSlide);
			showCurrentDot(currentSlide);
		}
	};

	const showNextSlide = () => {
		if (currentSlide === liveSlides.length - 1) {
			currentSlide = 0;
			showCurrentSlide(currentSlide);
			showCurrentDot(currentSlide);
		} else {
			currentSlide++;
			showCurrentSlide(currentSlide);
			showCurrentDot(currentSlide);
		}
	};

	buttonPrevious.addEventListener('click', showPreviousSlide);
	buttonNext.addEventListener('click', showNextSlide);

	// Close Help
	const helpNotice = document.querySelector('.help');
	const closeHelpButton = helpNotice.querySelector('.button-close');

	const closeHelp = () => {
		closeHelpButton.addEventListener('click', () => {
			helpNotice.style.display = 'none';
		});
	};
	closeHelp();
}());
/*
	const slidesList = document.querySelector('.slider__list');
	const liveSlides = slidesList.children;
	let currentSlide = 0;

	const slider = () => {
		for (let i = 0; i < liveSlides.length; i++) {
			liveSlides[i].style.opacity = '0';
		}
		liveSlides[currentSlide].style.opacity = '1';

		if (currentSlide === liveSlides.length - 1) {
			currentSlide = 0;
		} else {
			currentSlide++;
		}

		return currentSlide;
	};

	slidesList.addEventListener('click', () => {
		slider();
	});

	const helpNotice = document.querySelector('.help');
	const closeHelpButton = helpNotice.querySelector('.button-close');

	const closeHelp = () => {
		closeHelpButton.addEventListener('click', () => {
			helpNotice.style.display = 'none';
		});
	};
	closeHelp();
}());
*/
