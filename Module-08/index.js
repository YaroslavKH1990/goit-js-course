// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
'use strict';

import items from './gallery-items.js';

document.addEventListener('DOMContentLoaded', () => {
	const refs = {
		galleryRef: document.querySelector('.js-gallery'),
		lightboxRef: document.querySelector('.lightbox'),
		lightboxContentRef: document.querySelector('.lightbox__content'),
		lightboxImgRef: document.querySelector('.lightbox__image'),
		lightboxBtnRef: document.querySelector(
			'button[data-action="close-lightbox"]'
		)
	};

	const galleryItems = items.map((elem) => {
		const li = document.createElement('li');
		const a = document.createElement('a');
		const img = document.createElement('img');

		li.classList.add('gallery__item');
		a.classList.add('gallery__link');
		img.classList.add('gallery__image');

		a.setAttribute('href', elem.original);
		img.setAttribute('src', elem.preview);
		img.setAttribute('data-source', elem.original);
		img.setAttribute('alt', elem.description);

		a.append(img);
		li.append(a);

		return li;
	});

	refs.galleryRef.append(...galleryItems);

	function onImageClick(event) {
		event.preventDefault();

		if (event.target.nodeName !== 'IMG') {
			return;
		}

		const imageRef = event.target;
		const imageUrl = imageRef.dataset.source;

		imageSrc(imageUrl);
		modalOpen();
	}

	function imageSrc(url) {
		refs.lightboxImgRef.src = url;
	}

	function modalOpen() {
		window.addEventListener('keydown', pressEscape);
		refs.lightboxRef.classList.add('is-open');
	}

	function modalClose() {
		window.removeEventListener('keydown', pressEscape);
		refs.lightboxRef.classList.remove('is-open');
		refs.lightboxImgRef.src = '';
	}

	function clickOverlay(event) {
		if (event.target === event.currentTarget) {
			modalClose();
		}
	}

	function pressEscape(event) {
		if (event.code === 'Escape') {
			modalClose();
		}
	}

	refs.galleryRef.addEventListener('click', onImageClick);
	refs.lightboxBtnRef.addEventListener('click', modalClose);
	refs.lightboxContentRef.addEventListener('click', clickOverlay);
});
