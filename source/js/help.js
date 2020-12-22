/* eslint-disable no-restricted-syntax */
(function () {
	const slidesList = document.querySelector('.slider__list');
	const liveSlides = slidesList.children;
	const dots = document.querySelectorAll('.dot');

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
		for (const dot of dots) {
			dot.classList.remove('dot__current');
		}
		dots[i].classList.add('dot__current');
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

	dots.forEach((item, indexDot) => {
		item.addEventListener('click', () => {
			currentSlide = indexDot;
			showCurrentSlide(currentSlide);
			showCurrentDot(currentSlide);
		});
	});

	buttonPrevious.addEventListener('click', showPreviousSlide);
	buttonNext.addEventListener('click', showNextSlide);

	// Open help
	const helpNotice = document.querySelector('.help');
	const helpButton = document.querySelector('.help__activate-button');

	const openHelp = () => {
		helpButton.addEventListener('click', () => {
			helpNotice.style.display = 'block';
		});
	};
	openHelp();

	// Close Help
	const closeHelpButton = helpNotice.querySelector('.button__close');

	const closeHelp = () => {
		closeHelpButton.addEventListener('click', () => {
			helpNotice.style.display = 'none';
		});
	};
	closeHelp();
}());
